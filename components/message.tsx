"use client"

import { User, Bot } from "lucide-react"

interface MessageProps {
  message: {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
  }
}

export function Message({ message }: MessageProps) {
  return (
    <div className={`py-4 sm:py-6 ${message.isUser ? "bg-[#212121]" : "bg-[#212121]"}`}>
      <div className="max-w-4xl mx-auto flex gap-3 sm:gap-4 px-3 sm:px-4">
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          message.isUser ? "bg-[#10a37f]" : "bg-[#19c37d]"
        }`}>
          {message.isUser ? (
            <User size={14} className="sm:w-4 sm:h-4 text-white" />
          ) : (
            <Bot size={14} className="sm:w-4 sm:h-4 text-white" />
          )}
        </div>
        <div className="flex-1 text-white leading-relaxed text-sm sm:text-base">
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
      </div>
    </div>
  )
} 