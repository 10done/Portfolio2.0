"use client";

import SectionContainer from "@/components/section-container";
import SectionHeader from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Contribution {
  title: string;
  organization: string;
  description: string;
  link: string;
  tags: string[];
}

const contributions: Contribution[] = [
  {
    title: "DMD",
    organization: "dlang · D language compiler",
    description:
      "Made the compiler detect a ref that escapes through a closure, and fixed a 16-bit left shift that used 32-bit flags.",
    link: "https://github.com/dlang/dmd/pulls?q=is:pr+author:10done",
    tags: ["D", "Compilers", "Memory safety"],
  },
  {
    title: "Flagsmith",
    organization: "Flagsmith · Django feature-flag platform",
    description:
      "Let project admins manage project-scoped custom fields, detected multivariate differences between environments, and fixed password validation order on disabled invites.",
    link: "https://github.com/Flagsmith/flagsmith/pulls?q=is:pr+author:10done",
    tags: ["Python", "Django"],
  },
  {
    title: "AsyncAPI Generator",
    organization: "AsyncAPI Initiative",
    description:
      "Added registerOutgoingProcessor() to the JavaScript WebSocket client, a HandleError component for Dart, and Dart send methods generated from AsyncAPI operations.",
    link: "https://github.com/asyncapi/generator/pulls?q=is:pr+author:10done",
    tags: ["JavaScript", "Dart", "WebSockets"],
  },
  {
    title: "Alpha One Labs Education Platform",
    organization: "alphaonelabs",
    description:
      "Merged 18 pull requests (15 features and 3 bug fixes): a virtual science lab, a Python code editor, envelope-encrypted messages, learning streaks, achievement badges, shareable certificates and deadline reminders.",
    link: "https://github.com/alphaonelabs/website/pulls?q=is%3Apr+state%3Aclosed+author%3A10done",
    tags: ["Django", "Python", "React"],
  },
];

export default function OpenSourceSection() {
  return (
    <SectionContainer id="open-source">
      <SectionHeader
        label="Open Source"
        title="Open Source Contributions"
        description="Merged pull requests to production open-source projects."
      />

      <div className="grid grid-cols-1 gap-4">
        {contributions.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border/50 bg-card p-5 space-y-4"
          >
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.organization}
              </p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="gap-2 rounded-full">
                <Github className="w-4 h-4" />
                View Pull Requests
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
