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
    title: "AlphaOneLabs Education Platform",
    organization: "alphaonelabs",
    description:
      "Contributed merged pull requests to the education platform and helped improve product quality through code contributions and fixes.",
    link: "https://github.com/alphaonelabs/alphaonelabs-education-website/pulls?q=is:pr+is:merged+author:10done",
    tags: ["Open Source", "Pull Requests", "Web Development"],
  },
];

export default function OpenSourceSection() {
  return (
    <SectionContainer id="open-source">
      <SectionHeader
        label="Open Source"
        title="Open Source Contributions"
        description="Selected contributions and repositories that showcase practical engineering, collaboration, and production-focused development."
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
                View Contribution
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
