"use client"

import { User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

interface MessageProps {
  message: {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
  }
}

export function Message({ message }: MessageProps) {
  const alignment = message.isUser ? "justify-end" : "justify-start"
  const bubbleClass = cn(
    "relative max-w-[min(100%,680px)] rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-lg ring-1 ring-white/10 transition-transform duration-300",
    message.isUser
      ? "ml-auto bg-gradient-to-br from-indigo-500/90 via-purple-500/80 to-sky-500/80 text-white shadow-[0_16px_45px_rgba(88,82,197,0.45)]"
      : "bg-white/8 text-white/95 backdrop-blur"
  )

  const iconWrapper = cn(
    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10",
    message.isUser ? "bg-white/15 text-white" : "bg-white/10 text-white"
  )

  return (
    <div className={cn("flex gap-3", alignment)}>
      {!message.isUser && (
        <div className={iconWrapper}>
          <Bot size={16} />
        </div>
      )}
      <div className={bubbleClass}>
        <div className="space-y-3 text-base text-white/90">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-white/90 md:text-base">
            {message.content}
          </p>
        </div>
      </div>
      {message.isUser && (
        <div className={iconWrapper}>
          <User size={16} />
        </div>
      )}
    </div>
  )
} 