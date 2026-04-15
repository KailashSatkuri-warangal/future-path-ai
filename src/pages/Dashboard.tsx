import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Target, DollarSign, Landmark, ShieldAlert, TrendingUp, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const salaryData = [
  { year: "Year 1", salary: 45000 },
  { year: "Year 2", salary: 52000 },
  { year: "Year 3", salary: 63000 },
  { year: "Year 4", salary: 72000 },
  { year: "Year 5", salary: 85000 },
];

const recentActivity = [
  { title: "Career assessment completed", time: "2 hours ago", icon: Target },
  { title: "Loan pre-approval received", time: "1 day ago", icon: Landmark },
  { title: "Resume reviewed by AI", time: "3 days ago", icon: BookOpen },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Welcome back, Alex</h1>
          <p className="text-muted-foreground text-sm mt-1">Here's your education planning overview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Target} title="Placement Probability" value="87%" subtitle="Top 15% of applicants" trend={{ value: "+5%", positive: true }} gradient />
          <StatCard icon={DollarSign} title="Expected Salary" value="$72K" subtitle="After graduation" trend={{ value: "+12%", positive: true }} />
          <StatCard icon={Landmark} title="Loan Eligibility" value="$45K" subtitle="Pre-approved" />
          <StatCard icon={ShieldAlert} title="Risk Score" value="Low" subtitle="Based on 12 factors" trend={{ value: "Stable", positive: true }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground">Salary Growth Projection</h3>
                <p className="text-xs text-muted-foreground mt-1">Expected annual compensation</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-success">
                <TrendingUp className="w-3.5 h-3.5" /> +89% over 5 years
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={salaryData}>
                <defs>
                  <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(230, 80%, 65%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(230, 80%, 65%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(220, 10%, 55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 55%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
                <Tooltip contentStyle={{ background: "hsl(228, 20%, 12%)", border: "1px solid hsl(228, 15%, 22%)", borderRadius: "8px", color: "hsl(220, 20%, 95%)" }} />
                <Area type="monotone" dataKey="salary" stroke="hsl(230, 80%, 65%)" strokeWidth={2} fill="url(#salaryGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Recent Activity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
            <h3 className="font-heading font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
