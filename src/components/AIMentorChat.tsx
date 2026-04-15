import { useState } from "react";
import { X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What's my placement probability?",
  "Which loans suit my profile?",
  "Best universities for CS?",
  "How to improve my ROI?",
];

export default function AIMentorChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your AI mentor. I can help you with career planning, loan eligibility, university selection, and more. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [
      ...prev,
      userMsg,
      { role: "assistant", content: "Thanks for your question! In a full implementation, I'd connect to an AI model to provide personalized guidance based on your profile, academic history, and career goals." },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Bot className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="font-heading font-semibold text-sm text-foreground">AI Mentor</p>
            <p className="text-xs text-success">Online</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.role === "assistant" ? "bg-primary/20" : "bg-accent/20"
            }`}>
              {msg.role === "assistant" ? <Bot className="w-3.5 h-3.5 text-primary" /> : <User className="w-3.5 h-3.5 text-accent" />}
            </div>
            <div className={`max-w-[75%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
              msg.role === "assistant" ? "glass-card text-foreground" : "bg-primary text-primary-foreground"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask your AI mentor..."
            className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
          />
          <button
            onClick={() => send(input)}
            className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
