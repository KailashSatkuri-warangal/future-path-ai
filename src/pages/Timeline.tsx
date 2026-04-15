import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, BookOpen, FileText, Plane, Landmark, GraduationCap } from "lucide-react";

const steps = [
  { title: "IELTS / TOEFL Preparation", desc: "Complete English proficiency test with target score 7.0+", date: "Jan - Mar 2025", status: "completed", icon: BookOpen },
  { title: "University Research & Shortlisting", desc: "Identify top 6 universities based on AI recommendations", date: "Feb - Apr 2025", status: "completed", icon: GraduationCap },
  { title: "Application Submission", desc: "Submit applications with SOP, LOR, and transcripts", date: "Apr - Jun 2025", status: "current", icon: FileText },
  { title: "Loan Application", desc: "Apply for education loan with pre-approved amount", date: "Jun - Jul 2025", status: "upcoming", icon: Landmark },
  { title: "Visa Application", desc: "Apply for student visa with admission and loan documents", date: "Jul - Aug 2025", status: "upcoming", icon: Plane },
  { title: "Pre-Departure Prep", desc: "Accommodation, travel, and orientation preparation", date: "Aug - Sep 2025", status: "upcoming", icon: Clock },
];

function getStatusStyle(status: string) {
  switch (status) {
    case "completed": return { dot: "bg-success", line: "bg-success", text: "text-success", badge: "bg-success/10 text-success" };
    case "current": return { dot: "bg-primary animate-pulse-glow", line: "bg-border", text: "text-primary", badge: "bg-primary/10 text-primary" };
    default: return { dot: "bg-muted", line: "bg-border", text: "text-muted-foreground", badge: "bg-muted text-muted-foreground" };
  }
}

export default function Timeline() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Timeline Planner</h1>
          <p className="text-muted-foreground text-sm mt-1">Your step-by-step education journey</p>
        </div>

        <div className="relative">
          {steps.map((step, i) => {
            const style = getStatusStyle(step.status);
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 mb-2"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.status === "completed" ? "bg-success/20" : step.status === "current" ? "bg-primary/20" : "bg-muted/50"
                  }`}>
                    {step.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    ) : step.status === "current" ? (
                      <Icon className="w-5 h-5 text-primary" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  {i < steps.length - 1 && <div className={`w-0.5 h-full min-h-[60px] ${style.line}`} />}
                </div>

                {/* Content */}
                <div className="glass-card p-5 flex-1 mb-4">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 className="font-heading font-semibold text-foreground">{step.title}</h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
                      {step.status === "completed" ? "Done" : step.status === "current" ? "In Progress" : "Upcoming"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {step.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
