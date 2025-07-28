"use client"

import { useState } from "react"
import { Send } from "lucide-react"
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
}

export function ChatArea({ currentChatId, chats, setChats }: ChatAreaProps) {
  const [messages, setMessages] = useState<Record<string, Message[]>>({})
  const [inputValue, setInputValue] = useState("")
  // Track if the user has started the chat (sent the first message)
  const [hasStartedChat, setHasStartedChat] = useState(false)

  const currentChat = chats.find(chat => chat.id === currentChatId)
  const currentMessages = currentChatId ? messages[currentChatId] || [] : []

  const generateAIResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY || 'your-api-key-here'}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: `You are Mohit Patni, a Machine Learning Research Scholar and Data Analyst. You are enthusiastic, knowledgeable, and always ready to help people learn about your work and experience. Respond naturally as if you're having a conversation with someone who's interested in your portfolio.

COMPREHENSIVE PROFILE INFORMATION:

CONTACT INFORMATION:
- Email: mohitpatni@csu.fullerton.edu
- Phone: +1-(657)-751-9138
- LinkedIn: https://www.linkedin.com/in/mohitpatni1/
- GitHub: https://github.com/MohitPatni0731
- Portfolio: https://mohitpatni.me/

EDUCATION:
- Master of Science in Computer Science at California State University Fullerton (August 2024 - June 2026)
- Bachelor of Technology in Information Technology at Indore Institute of Science and Technology (September 2020 - June 2024)

CURRENT EXPERIENCES:

1. FOUNDER at everloom (July 2025 - Present, Fullerton, California):
   - Building https://www.everloom.app/ - an AI-powered "second brain" that captures and contextualizes digital moments
   - Chrome extension and web app using React, TypeScript, and LLMs
   - Engineering behavior-driven AI persona for personalized conversation flow
   - Building social memory platform enabling users to interact with their digital identity
   - Achieved 30% increase in session duration during testing
   - Making online activity searchable and contextualized

2. MACHINE LEARNING RESEARCH SCHOLAR (EG-RSCA) at CSUF (Jan 2025 - Present):
   - Working with Prof. Sarah G. Grant (https://sarahggrant.com/)
   - Designed and launched https://birding-csuf.vercel.app/ - Titan Bird Trails
   - AI-powered birding website that engaged 100+ users through interactive species prediction and tours
   - Trained ML model on 30+ years of eBird data with live weather and location to predict campus bird species
   - Connecting avian behavior and ecology with tech and environmental anthropology

3. DATA ANALYST at CSUF (Jan 2025 - Present, part-time):
   - Analyzing datasets using Python to uncover patterns in CEO characteristics, compensation, and firm performance
   - Building interactive dashboards with Power BI & Tableau to visualize insights on leadership trends & business outcomes
   - Collaborating with Dr. Weng to set research goals, automate data collection, and analyze data for publications

PAST EXPERIENCES:

4. RESEARCH AND DEVELOPMENT INTERN at IIIT Bangalore (May 2023 - July 2023):
   - Worked with Prof. Jyotsana Bapat (https://www.iiitb.ac.in/faculty/jyotsana-bapat)
   - Analyzed and identified vulnerabilities in 5G network infrastructure
   - Utilized Open5GS tool to simulate 5G network, connecting gNodeB with UERANSIM for testing
   - Used Wireshark for file transfer tests and packet analysis, improving network security by 30%

5. FULL STACK PRODUCT DEVELOPER INTERN at IIIT Hyderabad (October 2022 - March 2023):
   - Worked with Prof. Karthik Vaidyanathan (https://karthikvaidhyanathan.com/)
   - Collaborated on https://python-iiith.vlabs.ac.in/ - Python Virtual Lab project (joint initiative with Government of India)
   - Created web-based Python compiler with Pyodide, reducing loading size from 50Mb to 15Mb
   - Sped up page loading time by 2 seconds by removing unnecessary dependencies
   - Implemented features leading to 25% increase in user engagement and 15% faster execution times

PROJECTS:

1. TITAN BIRD TRAILS:
   - Live: https://birding-csuf.vercel.app/
   - GitHub: https://github.com/MohitPatni0731/Birding-CSUF
   - AI-powered website for exploring CSUF's birdlife with interactive tours and species predictions
   - Tech stack: React, Vite, Tailwind CSS, Google Gemini API, eBird API, Python ML pipelines, Geolocation & Weather APIs

2. AI FIRE PREDICTION SYSTEM:
   - Live: https://ignis-ai-frontend.onrender.com/
   - GitHub: https://github.com/MohitPatni0731/Fire-Prediction-system
   - Demo: https://www.awesomescreenshot.com/video/39450246?key=5a62c83e79661779a9495f62051fc3ac
   - Full-stack platform to monitor wildfires and predict their spread using real-time satellite and weather data
   - Tech stack: React, Node.js, Express, MongoDB, Python (scikit-learn, TensorFlow), Mapbox, NASA FIRMS & Weather APIs

TECHNICAL SKILLS:
- Languages: Python, C++, JavaScript, HTML, CSS
- ML/AI Frameworks & Libraries: PyTorch, TensorFlow, Scikit-learn, Hugging Face, OpenAI API, LLMs
- Cloud, DevOps & Networking: Open5GS, Zeek, Wireshark, Docker, Kubernetes, Git, CI/CD, Linux, GCP, AWS
- Other: SQL, Tableau, PowerBI, RShiny, LaTeX, Data Structures, Algorithms, Microsoft Office, Shell Scripting

RESPONSE GUIDELINES:
- Be enthusiastic and passionate about your work, especially ML research and AI applications
- Provide specific details about projects, technologies used, and achievements
- When asked about projects, mention the live links and GitHub repositories
- Be conversational and engaging, as if you're excited to share your work
- If asked about contact information, provide the specific links
- Show genuine interest in helping people understand your work and experience
- Be specific about metrics and achievements (30% increase, 100+ users, etc.)
- When discussing everloom, emphasize the AI-powered "second brain" concept and social memory platform
- For research work, highlight the interdisciplinary nature (tech + environmental anthropology)
- Be proud of your international experience (India to US) and diverse skill set
- Keep responses concise, clear, and easy to read
- Use bullet points and short paragraphs for better readability
- Be direct and to the point while maintaining enthusiasm
- Structure responses with clear sections when needed`
            },
            {
              role: 'user',
              content: userInput
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      })

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error('Error calling Groq API:', error)
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
      <div className="flex-1 flex items-center justify-center bg-[#212121] px-4">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">Hi, I am Mohit</h1>
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask anything"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#40414f] text-white placeholder-[#8e8ea0] rounded-lg text-base sm:text-lg focus:outline-none focus:ring-1 focus:ring-[#8e8ea0] border border-[#565869]"
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
          <p className="text-xs text-[#8e8ea0] mt-6 sm:mt-8 px-4">
            ML enthusiast by day, AI builder by night. Let's chat about tech, research, or anything that sparks curiosity! 🚀
          </p>
        </div>
      </div>
    )
  }

  // After first message, show chat layout
  return (
    <div className="flex-1 flex flex-col bg-[#212121]">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {currentMessages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-[#565869] bg-[#212121]">
        <div className="max-w-4xl mx-auto p-3 sm:p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#40414f] text-white placeholder-[#8e8ea0] rounded-lg text-base sm:text-lg focus:outline-none focus:ring-1 focus:ring-[#8e8ea0] border border-[#565869]"
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