import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Smart Career Matching", desc: "AI-powered university and career recommendations based on your profile" },
  { icon: TrendingUp, title: "ROI Analysis", desc: "Compare education costs vs expected salary with real-time data" },
  { icon: Shield, title: "Loan Planning", desc: "Personalized loan eligibility and EMI calculations" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-t from-secondary/15 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">EduAI</span>
        </div>
        <Link
          to="/dashboard"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Sign In
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-32 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-8">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Powered by Advanced AI
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Plan Your Future<br />
            <span className="gradient-text">with AI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Intelligent career planning, university matching, and loan optimization — all powered by AI to help you make the best education investment.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-heading font-semibold text-lg hover:opacity-90 transition-opacity glow-primary"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
