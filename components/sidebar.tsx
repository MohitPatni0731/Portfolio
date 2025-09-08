"use client"

import { Plus, MessageSquare } from "lucide-react"

interface Chat {
  id: string
  title: string
  timestamp: Date
}

interface SidebarProps {
  chats: Chat[]
  currentChatId: string | null
  onNewChat: () => void
  onSelectChat: (chatId: string) => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ chats, currentChatId, onNewChat, onSelectChat, isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-[260px] bg-[#202123] h-full flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay for mobile */}
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-20 md:hidden" />}
      
      {/* Sidebar Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* New Chat Button */}
        <div className="p-3">
          <button
            onClick={onNewChat}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white hover:bg-[#2A2A2A] rounded-md transition-colors border border-[#565869]"
          >
            <Plus size={16} />
            New chat
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="text-xs font-medium text-[#8e8ea0] mb-2 px-3">Chats</div>
          <div className="space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
                  currentChatId === chat.id
                    ? "bg-[#2A2A2A] text-white"
                    : "text-[#8e8ea0] hover:bg-[#2A2A2A] hover:text-white"
                }`}
              >
                <MessageSquare size={16} />
                <span className="truncate">{chat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 