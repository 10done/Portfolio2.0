"use client";

import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import SectionContainer from "@/components/section-container";
import { useState } from "react";
import {
  MapPin,
  GraduationCap,
  Rocket,
  Mail,
  FileText,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { profileData } from "@/data/profile";

const socialIcons = [
  {
    icon: SiGithub,
    url: "https://github.com/10done",
    label: "GitHub",
    color: "#fff",
  },
  {
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/anubhav-tandon-9b8737245/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: Mail,
    url: "mailto:anubhavtandon6424@gmail.com",
    label: "Email",
    color: "#EA4335",
    isLucide: true,
  },
];

const stats = [
  { icon: Rocket, label: "Founder @ Plate8" },
  { icon: GraduationCap, label: "B.Tech CSE, IIT Jodhpur '26" },
  { icon: MapPin, label: "Chandigarh, India / Bangalore, India" },
];

const highlightBadges = [
  {
    label: "AI Agents & LLM Evals",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  {
    label: "Full Stack",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    label: "Backend & DevOps",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    label: "IIT Jodhpur CSE",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
];

// Headline numbers from the resume, shown as a quick-scan strip for recruiters
const impactMetrics = [
  { value: "3", label: "restaurants piloting Plate8" },
  { value: "30%", label: "less food wastage at pilots" },
  { value: "1,100+", label: "automated tests shipped" },
  { value: "Top 1%", label: "JEE Advanced 2022 (~1.2M)" },
];

export default function HeroSection() {
  const [animateImage, setAnimateImage] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <SectionContainer className="pt-24 pb-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <motion.div
            variants={itemVariants}
            onClick={() => setAnimateImage(!animateImage)}
            className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 cursor-pointer"
          >
            <motion.div
              className="absolute -inset-1.5 bg-primary/10 rounded-full blur-lg"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={
                animateImage ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }
              }
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 bg-background shadow-xl"
            >
              <Image
                src="/profile.jpg"
                alt="Anubhav Tandon"
                fill
                className="object-cover scale-110"
                priority
              />
            </motion.div>
          </motion.div>

          <div className="space-y-2 flex-1">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 flex-wrap"
            >
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {profileData.name}
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">
                <Typewriter
                  words={[
                    "AI Engineer",
                    "Full-Stack Software Engineer",
                    "Founder @ Plate8",
                    "IIT Jodhpur CSE",
                  ]}
                  loop={true}
                  cursor
                  cursorColor="currentColor"
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-muted-foreground/70" />
                <span>{stat.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          {socialIcons.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-9 h-9 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-muted/80 hover:border-primary/30 transition-all duration-200 group"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            );
          })}
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            I build production LLM applications end to end:{" "}
            <span className="text-foreground font-medium">
              AI agents with tool calling
            </span>
            , RAG, speech-to-text,{" "}
            <span className="text-foreground font-medium">LLM evals</span> and
            multi-tenant backends on AWS. Founder of{" "}
            <a
              href="https://plate8.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
            >
              Plate8
            </a>
            , an AI restaurant operations platform in pilot at 3 restaurants.
            Previously shipped GPU cloud backends and DevOps automation at
            Skyportal.ai &amp; Oblivus Cloud.
          </p>

          <div className="flex flex-wrap gap-2">
            {highlightBadges.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold border ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border/40 bg-card px-3 py-2.5"
            >
              <div className="text-lg font-bold tracking-tight text-foreground">
                {metric.value}
              </div>
              <div className="text-[11px] leading-snug text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 pt-1"
        >
          <a
            href={profileData.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              variant="default"
              className="rounded-full px-5 font-semibold gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
          <a
            href="https://github.com/10done"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              variant="outline"
              className="rounded-full px-5 font-semibold border-border/50 gap-2"
            >
              <SiGithub className="w-3.5 h-3.5" />
              GitHub
            </Button>
          </a>
          <Link href="#contact">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full px-5 font-semibold border-border/50 gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
