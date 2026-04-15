import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, GraduationCap, Calculator, Landmark, CalendarClock, Bot, Sparkles } from "lucide-react";
import { useState } from "react";
import AIMentorChat from "./AIMentorChat";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/careers", label: "Careers", icon: GraduationCap },
  { path: "/roi-calculator", label: "ROI Calculator", icon: Calculator },
  { path: "/loan-eligibility", label: "Loans", icon: Landmark },
  { path: "/timeline", label: "Timeline", icon: CalendarClock },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-sidebar p-6 gap-2">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold text-foreground">EduAI</span>
        </Link>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-primary/15 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <div className="lg:hidden">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-foreground">EduAI</span>
            </Link>
          </div>
          {/* Mobile Nav */}
          <div className="flex lg:hidden gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-lg transition-colors ${active ? "text-primary bg-primary/10" : "text-muted-foreground"}`}
                >
                  <item.icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">AI Mentor</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>

      {/* AI Mentor Sidebar */}
      {chatOpen && (
        <div className="fixed right-0 top-0 h-full w-full sm:w-96 z-50 border-l border-border bg-sidebar/95 backdrop-blur-xl shadow-2xl">
          <AIMentorChat onClose={() => setChatOpen(false)} />
        </div>
      )}
    </div>
  );
}
