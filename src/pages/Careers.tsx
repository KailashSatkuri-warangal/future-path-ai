import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { MapPin, Star, TrendingUp, ExternalLink } from "lucide-react";

const universities = [
  { name: "MIT", location: "Cambridge, MA", match: 94, rank: 1, salary: "$95K", field: "Computer Science", tuition: "$57K/yr" },
  { name: "Stanford University", location: "Stanford, CA", match: 91, rank: 2, salary: "$92K", field: "Data Science", tuition: "$56K/yr" },
  { name: "UC Berkeley", location: "Berkeley, CA", match: 88, rank: 4, salary: "$87K", field: "AI & ML", tuition: "$44K/yr" },
  { name: "Georgia Tech", location: "Atlanta, GA", match: 85, rank: 8, salary: "$82K", field: "Software Engineering", tuition: "$33K/yr" },
  { name: "University of Toronto", location: "Toronto, CA", match: 82, rank: 12, salary: "$75K", field: "Computer Science", tuition: "$28K/yr" },
  { name: "TU Munich", location: "Munich, DE", match: 79, rank: 15, salary: "$70K", field: "Data Engineering", tuition: "$5K/yr" },
];

function getMatchColor(match: number) {
  if (match >= 90) return "text-success";
  if (match >= 80) return "text-primary";
  return "text-warning";
}

export default function Careers() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Career Recommendations</h1>
          <p className="text-muted-foreground text-sm mt-1">Universities and programs matched to your profile</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" /> {uni.location}
                  </div>
                </div>
                <div className={`text-2xl font-heading font-bold ${getMatchColor(uni.match)}`}>
                  {uni.match}%
                </div>
              </div>
              <div className="space-y-2 text-sm flex-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Field</span>
                  <span className="text-foreground">{uni.field}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Salary</span>
                  <span className="text-success">{uni.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tuition</span>
                  <span className="text-foreground">{uni.tuition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Global Rank</span>
                  <span className="flex items-center gap-1 text-foreground"><Star className="w-3 h-3 text-warning" />#{uni.rank}</span>
                </div>
              </div>
              {/* Match bar */}
              <div className="mt-4 mb-3">
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${uni.match}%` }} />
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" /> View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
