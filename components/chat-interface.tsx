"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./sidebar"
import { ChatArea } from "./chat-area"

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
  }

  return (
    <div className="flex h-full w-full relative">
      <Sidebar 
        chats={chats}
        currentChatId={currentChatId}
        onNewChat={startNewChat}
        onSelectChat={setCurrentChatId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <ChatArea 
        currentChatId={currentChatId}
        chats={chats}
        setChats={setChats}
        onMenuClick={() => setIsSidebarOpen(true)}
      />
    </div>
  )
} 