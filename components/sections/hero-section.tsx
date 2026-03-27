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
  Briefcase,
  Clock,
  Mail,
  FileText,
  Phone,
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
  { icon: MapPin, label: "IIT Jodhpur, India" },
  { icon: Briefcase, label: "B.Tech CSE, May 2026" },
  { icon: Clock, label: "Open to work" },
];

const highlightBadges = [
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
                    "Software Engineer",
                    "Full Stack Developer",
                    "Backend Engineer",
                    "CS @ IIT Jodhpur",
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
            I build full-stack web applications and scalable backend systems with a focus on{" "}
            <span className="text-foreground font-medium">
              real-world impact
            </span>
            . Passionate about{" "}
            <span className="text-foreground font-medium">AI</span>,{" "}
            <span className="text-foreground font-medium">DevOps automation</span>,
            cloud infrastructure, and practical software engineering.
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
              <Phone className="w-3.5 h-3.5" />
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
