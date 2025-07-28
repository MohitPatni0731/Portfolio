"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./sidebar"
import { ChatArea } from "./chat-area"
import { Menu, X } from "lucide-react"

export function ChatInterface() {
  const [chats, setChats] = useState<Array<{ id: string; title: string; timestamp: Date }>>([])
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Auto-create a chat when component mounts
  useEffect(() => {
    if (chats.length === 0) {
      const newChatId = `chat-${Date.now()}`
      const newChat = {
        id: newChatId,
        title: "New Chat",
        timestamp: new Date()
      }
      setChats([newChat])
      setCurrentChatId(newChatId)
    }
  }, [])

  const startNewChat = () => {
    const newChatId = `chat-${Date.now()}`
    const newChat = {
      id: newChatId,
      title: "New Chat",
      timestamp: new Date()
    }
    setChats(prev => [newChat, ...prev])
    setCurrentChatId(newChatId)
    // Close sidebar on mobile after starting new chat
    setIsSidebarOpen(false)
  }

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId)
    // Close sidebar on mobile after selecting chat
    setIsSidebarOpen(false)
  }

  return (
    <div className="flex h-full w-full relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          chats={chats}
          currentChatId={currentChatId}
          onNewChat={startNewChat}
          onSelectChat={handleSelectChat}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-[#212121] border-b border-[#565869]">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            {isSidebarOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
          <h1 className="text-lg font-semibold text-white">Mohit Patni</h1>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>

        <ChatArea 
          currentChatId={currentChatId}
          chats={chats}
          setChats={setChats}
        />
      </div>
    </div>
  )
} 