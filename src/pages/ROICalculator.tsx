import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";

const roiData = [
  { year: "Year 1", salary: 45000, cost: 57000 },
  { year: "Year 2", salary: 52000, cost: 57000 },
  { year: "Year 3", salary: 63000, cost: 0 },
  { year: "Year 4", salary: 72000, cost: 0 },
  { year: "Year 5", salary: 85000, cost: 0 },
  { year: "Year 6", salary: 95000, cost: 0 },
  { year: "Year 7", salary: 108000, cost: 0 },
];

const cumulativeData = [
  { year: "Year 1", net: -12000 },
  { year: "Year 2", net: -17000 },
  { year: "Year 3", net: 46000 },
  { year: "Year 4", net: 118000 },
  { year: "Year 5", net: 203000 },
  { year: "Year 6", net: 298000 },
  { year: "Year 7", net: 406000 },
];

export default function ROICalculator() {
  const [tuition, setTuition] = useState(57000);
  const [years, setYears] = useState(2);

  const totalCost = tuition * years;
  const totalEarnings = roiData.reduce((s, d) => s + d.salary, 0);
  const roi = ((totalEarnings - totalCost) / totalCost * 100).toFixed(0);

  const chartStyle = { background: "hsl(228, 20%, 12%)", border: "1px solid hsl(228, 15%, 22%)", borderRadius: "8px", color: "hsl(220, 20%, 95%)" };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">ROI Calculator</h1>
          <p className="text-muted-foreground text-sm mt-1">Compare your education investment against expected returns</p>
        </div>

        {/* Controls */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Annual Tuition</label>
            <input type="range" min={10000} max={80000} step={1000} value={tuition} onChange={(e) => setTuition(+e.target.value)} className="w-full accent-primary" />
            <p className="text-lg font-heading font-bold text-foreground mt-1">${tuition.toLocaleString()}/yr</p>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Program Duration</label>
            <input type="range" min={1} max={4} step={1} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-primary" />
            <p className="text-lg font-heading font-bold text-foreground mt-1">{years} year{years > 1 ? "s" : ""}</p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="glass-card p-5 text-center">
            <p className="text-sm text-muted-foreground">Total Cost</p>
            <p className="text-2xl font-heading font-bold text-foreground">${totalCost.toLocaleString()}</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-sm text-muted-foreground">7-Year Earnings</p>
            <p className="text-2xl font-heading font-bold text-success">${totalEarnings.toLocaleString()}</p>
          </div>
          <div className="glass-card p-5 text-center gradient-border">
            <p className="text-sm text-muted-foreground">ROI</p>
            <p className="text-2xl font-heading font-bold gradient-text">{roi}%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
            <h3 className="font-heading font-semibold text-foreground mb-4">Salary vs Education Cost</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={roiData}>
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(220,10%,55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(220,10%,55%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
                <Tooltip contentStyle={chartStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="salary" name="Salary" fill="hsl(230, 80%, 65%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" name="Cost" fill="hsl(280, 60%, 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
            <h3 className="font-heading font-semibold text-foreground mb-4">Cumulative Net Value</h3>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={cumulativeData}>
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(220,10%,55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(220,10%,55%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
                <Tooltip contentStyle={chartStyle} />
                <Line type="monotone" dataKey="net" name="Net Value" stroke="hsl(152, 60%, 50%)" strokeWidth={2} dot={{ fill: "hsl(152, 60%, 50%)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
