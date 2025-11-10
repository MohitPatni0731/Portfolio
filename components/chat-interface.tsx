"use client"

import { ChatArea } from "./chat-area"

export function ChatInterface() {
  return (
    <div className="relative flex min-h-[70vh] w-full overflow-hidden bg-radial-soft">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[25%] h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[18%] h-96 w-96 translate-x-1/2 rounded-full bg-secondary/25 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,176,255,0.12),_transparent_55%)]" />
      </div>

      <div className="relative z-10 flex flex-1 px-4 py-20 sm:px-8 lg:px-12">
        <ChatArea />
      </div>
    </div>
  )
} 