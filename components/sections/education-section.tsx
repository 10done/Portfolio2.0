"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Code2 } from "lucide-react";
import SectionContainer from "@/components/section-container";
import SectionHeader from "@/components/section-header";

const achievements = [
  {
    icon: Trophy,
    title: "JEE Advanced 2022",
    detail: "Top 1% of ~1.2 million candidates",
  },
  {
    icon: Code2,
    title: "Codeforces Specialist",
    detail:
      "Global ranks 1523 (Div. 2), 1655 and 1673 (Div. 3); 500+ DSA problems solved",
  },
];

export default function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionHeader
        label="Education"
        title="Education & Achievements"
      />

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-3 rounded-xl border border-border/40 bg-card p-4"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/5 border border-border/30 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-foreground/80" />
          </div>
          <div className="flex-1 space-y-0.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base font-bold">
                Indian Institute of Technology (IIT) Jodhpur
              </h3>
              <span className="text-xs text-muted-foreground/70 font-medium">
                Oct 2022 – May 2026
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              B.Tech in Computer Science and Engineering
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * (index + 1) }}
                className="rounded-xl border border-border/40 bg-card p-4 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-amber-500" />
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
