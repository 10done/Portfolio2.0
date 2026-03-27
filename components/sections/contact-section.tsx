"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/section-container";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Send,
  MessageSquare,
} from "lucide-react";
import { SiLinkedin } from "react-icons/si";

const contactLinks = [
  {
    icon: Mail,
    label: "anubhavtandon6424@gmail.com",
    description: "Drop me an email",
    url: "mailto:anubhavtandon6424@gmail.com",
    isLucide: true,
  },
  {
    icon: SiLinkedin,
    label: "Connect on LinkedIn",
    description: "Let's network",
    url: "https://www.linkedin.com/in/anubhav-tandon-9b8737245/",
    isLucide: false,
  },
];

export default function ContactSection() {
  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=anubhavtandon6424@gmail.com&su=Portfolio%20Inquiry";

  return (
    <SectionContainer id="contact">
      <SectionHeader
        label="Contact"
        title="Get in Touch"
        description="Have a project in mind or just want to chat? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
        {/* Left Column — Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 min-w-0"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Open for freelance work, full-time roles, and interesting
            collaborations. Whether it's an idea, a question, or just a hello —
            feel free to reach out.
          </p>

          <div className="space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/40 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                    <Icon className="w-4 h-4 text-primary/70" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {link.label}
                    </span>
                    <span className="text-xs text-muted-foreground/70">
                      {link.description}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column — Direct Contact */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="min-w-0 w-full"
        >
          <div className="rounded-xl bg-card border border-border/40 p-5 min-w-0 overflow-hidden">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-foreground">
              <MessageSquare className="w-4 h-4 text-primary/70 shrink-0" />
              Send a Message
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Click below to open Gmail directly and send me an email.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-w-0"
              >
                <Button size="sm" className="w-full max-w-full rounded-lg font-semibold gap-2 justify-center">
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  Open Gmail
                </Button>
              </a>
              <a href="mailto:anubhavtandon6424@gmail.com" className="block w-full min-w-0">
                <Button size="sm" variant="outline" className="w-full max-w-full rounded-lg font-semibold gap-2 justify-center whitespace-normal text-center h-auto py-2.5">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  Use Default Mail App
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
