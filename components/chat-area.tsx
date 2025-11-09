"use client"

import { useState } from "react"
import { Send, Menu } from "lucide-react"
import { Message } from "./message"

interface Chat {
  id: string
  title: string
  timestamp: Date
}

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface ChatAreaProps {
  currentChatId: string | null
  chats: Chat[]
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>
  onMenuClick: () => void
}

export function ChatArea({ currentChatId, chats, setChats, onMenuClick }: ChatAreaProps) {
  const [messages, setMessages] = useState<Record<string, Message[]>>({})
  const [inputValue, setInputValue] = useState("")
  // Track if the user has started the chat (sent the first message)
  const [hasStartedChat, setHasStartedChat] = useState(false)

  const currentChat = chats.find(chat => chat.id === currentChatId)
  const currentMessages = currentChatId ? messages[currentChatId] || [] : []

  const generateAIResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.error("API Error Response:", errorBody.error);
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.response;

    } catch (error) {
      console.error('Error calling chat API:', error)
      return "I'm sorry, I'm having trouble connecting right now. I'm Mohit Patni, a Machine Learning Research Scholar and Data Analyst. How can I help you learn more about my work and skills?"
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // If no current chat, create one
    let chatId = currentChatId
    if (!chatId) {
      chatId = `chat-${Date.now()}`
      const newChat = {
        id: chatId,
        title: inputValue.slice(0, 30) + (inputValue.length > 30 ? "..." : ""),
        timestamp: new Date()
      }
      setChats(prev => [newChat, ...prev])
      setHasStartedChat(true)
      setTimeout(() => {
        window.location.reload()
      }, 100)
      return
    }

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    // Add user message
    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), userMessage]
    }))

    // Update chat title if it's the first message
    if (currentMessages.length === 0) {
      setChats(prev => prev.map(chat => 
        chat.id === chatId 
          ? { ...chat, title: inputValue.slice(0, 30) + (inputValue.length > 30 ? "..." : "") }
          : chat
      ))
    }

    setInputValue("")
    setHasStartedChat(true)

    // Get AI response using Groq API
    const aiResponse = await generateAIResponse(userMessage.content)
    
    const aiMessage: Message = {
      id: `msg-${Date.now() + 1}`,
      content: aiResponse,
      isUser: false,
      timestamp: new Date()
    }

    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), aiMessage]
    }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Show centered input if no messages yet
  if (!hasStartedChat && (!currentChatId || currentMessages.length === 0)) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#212121]">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-8">Hi, I am Mohit</h1>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask anything"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-4 bg-[#40414f] text-white placeholder-[#8e8ea0] rounded-lg text-lg focus:outline-none focus:ring-1 focus:ring-[#8e8ea0] border border-[#565869]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <button 
                  onClick={handleSendMessage}
                  className="p-2 hover:bg-[#2A2A2A] rounded-md transition-colors"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#8e8ea0] mt-8">
            ML enthusiast by day, AI builder by night. Let's chat about tech, research, or anything that sparks curiosity! 🚀
          </p>
        </div>
      </div>
    )
  }

  // After first message, show chat layout
  return (
    <div className="flex-1 flex flex-col bg-[#212121]">
      {/* Header for mobile */}
      <div className="md:hidden flex items-center justify-between p-3 border-b border-[#565869]">
        <button onClick={onMenuClick} className="text-white">
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-semibold text-white truncate">
          {currentChat?.title || "New Chat"}
        </h2>
        {/* Spacer */}
        <div className="w-6" /> 
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {currentMessages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-[#565869] bg-[#212121]">
        <div className="max-w-4xl mx-auto p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-6 py-4 bg-[#40414f] text-white placeholder-[#8e8ea0] rounded-lg text-lg focus:outline-none focus:ring-1 focus:ring-[#8e8ea0] border border-[#565869]"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={handleSendMessage}
                className="p-2 hover:bg-[#2A2A2A] rounded-md transition-colors"
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 