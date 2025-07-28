"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./sidebar"
import { ChatArea } from "./chat-area"

export function ChatInterface() {
  const [chats, setChats] = useState<Array<{ id: string; title: string; timestamp: Date }>>([])
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)

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
  }

  return (
    <div className="flex h-full w-full">
      <Sidebar 
        chats={chats}
        currentChatId={currentChatId}
        onNewChat={startNewChat}
        onSelectChat={setCurrentChatId}
      />
      <ChatArea 
        currentChatId={currentChatId}
        chats={chats}
        setChats={setChats}
      />
    </div>
  )
} 