import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Landmark, CheckCircle2, ArrowRight, Shield, Clock, Percent } from "lucide-react";

const loanDetails = {
  amount: 45000,
  interestRate: 6.5,
  tenure: 10,
  emi: 510,
  status: "Pre-Approved",
};

const benefits = [
  { icon: Percent, title: "Low Interest Rate", desc: "Starting at 6.5% p.a." },
  { icon: Clock, title: "Flexible Tenure", desc: "Up to 15 years repayment" },
  { icon: Shield, title: "No Collateral", desc: "For loans up to $50K" },
];

const eligibilityChecks = [
  { label: "Credit Score", status: "passed", detail: "750+ (Excellent)" },
  { label: "Income Verification", status: "passed", detail: "Co-applicant verified" },
  { label: "Academic Record", status: "passed", detail: "GPA 3.8/4.0" },
  { label: "Admission Offer", status: "pending", detail: "Awaiting confirmation" },
];

export default function LoanEligibility() {
  const totalRepayment = loanDetails.emi * loanDetails.tenure * 12;
  const totalInterest = totalRepayment - loanDetails.amount;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Loan Eligibility</h1>
          <p className="text-muted-foreground text-sm mt-1">Your personalized education loan assessment</p>
        </div>

        {/* Main Loan Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 gradient-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Landmark className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Eligible Loan Amount</p>
                <p className="text-4xl font-heading font-bold text-foreground">${loanDetails.amount.toLocaleString()}</p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-full bg-success/15 text-success text-sm font-medium">{loanDetails.status}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-muted/30 rounded-xl p-4">
              <p className="text-xs text-muted-foreground">Interest Rate</p>
              <p className="text-lg font-heading font-bold text-foreground">{loanDetails.interestRate}%</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <p className="text-xs text-muted-foreground">Monthly EMI</p>
              <p className="text-lg font-heading font-bold text-foreground">${loanDetails.emi}</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <p className="text-xs text-muted-foreground">Tenure</p>
              <p className="text-lg font-heading font-bold text-foreground">{loanDetails.tenure} yrs</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <p className="text-xs text-muted-foreground">Total Interest</p>
              <p className="text-lg font-heading font-bold text-warning">${totalInterest.toLocaleString()}</p>
            </div>
          </div>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity glow-primary">
            Apply Now <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Eligibility Checklist */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
            <h3 className="font-heading font-semibold text-foreground mb-4">Eligibility Checklist</h3>
            <div className="space-y-3">
              {eligibilityChecks.map((check) => (
                <div key={check.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${check.status === "passed" ? "text-success" : "text-warning"}`} />
                    <div>
                      <p className="text-sm text-foreground">{check.label}</p>
                      <p className="text-xs text-muted-foreground">{check.detail}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    check.status === "passed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    {check.status === "passed" ? "Passed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
            <h3 className="font-heading font-semibold text-foreground mb-4">Loan Benefits</h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 p-4 rounded-xl bg-muted/20">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{b.title}</p>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
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
