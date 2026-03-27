"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/section-container";
import { techIcons } from "@/lib/tech-icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

// Tech stack with categories for the grid display
const techStack = [
    // Languages & Frameworks
    { name: "TypeScript", icon: techIcons["TypeScript"], color: "#3178C6" },
    { name: "JavaScript", icon: techIcons["JavaScript"], color: "#F7DF1E" },
    { name: "Python", icon: techIcons["Python"], color: "#e9e338" },
    { name: "Go", icon: techIcons["Go"], color: "#2d82c7" },
    { name: "React", icon: techIcons["React"], color: "#61DAFB" },
    { name: "Next.js", icon: techIcons["Next.js"], color: "#fff" },
    { name: "Node.js", icon: techIcons["Node.js"], color: "#339933" },
    { name: "NestJS", icon: techIcons["NestJS"], color: "#dc1308" },
    { name: "FastAPI", icon: techIcons["FastAPI"], color: "#009688" },
    { name: "Express.js", icon: techIcons["Express.js"], color: "#888" },

    // AI & ML
    { name: "OpenAI", icon: techIcons["OpenAI"], color: "#412991" },
    { name: "LangChain", icon: techIcons["LangChain"], color: "#1C3C3C" },
    { name: "Hugging Face", icon: techIcons["Hugging Face"], color: "#FF9D00" },
    { name: "PyTorch", icon: techIcons["PyTorch"], color: "#EE4C2C" },
    { name: "Streamlit", icon: techIcons["Streamlit"], color: "#FF4B4B" },

    // Databases & Cloud
    { name: "PostgreSQL", icon: techIcons["PostgreSQL"], color: "#336791" },
    { name: "MongoDB", icon: techIcons["MongoDB"], color: "#47A248" },
    { name: "Supabase", icon: techIcons["Supabase"], color: "#3ECF8E" },
    { name: "Firebase", icon: techIcons["Firebase"], color: "#FFCA28" },

    // DevOps & Tools
    { name: "Docker", icon: techIcons["Docker"], color: "#2496ED" },
    { name: "AWS", icon: techIcons["AWS"], color: "#FF9900" },
    { name: "Git", icon: techIcons["Git"], color: "#F05032" },
    { name: "GraphQL", icon: techIcons["GraphQL"], color: "#E10098" },
    { name: "gRPC", icon: techIcons["gRPC"], color: "#2786eb" },
    { name: "Linux", icon: techIcons["Linux"], color: "#FCC624" },

    // Mobile
    { name: "React Native", icon: techIcons["React Native"], color: "#61DAFB" },
    { name: "Expo", icon: techIcons["Expo"], color: "#fff" },

    // Extra
    { name: "Tailwind CSS", icon: techIcons["Tailwind CSS"], color: "#06B6D4" },
    { name: "Socket.io", icon: techIcons["Socket.io"], color: "#fff" },
    { name: "Postman", icon: techIcons["Postman"], color: "#FF6C37" },
].filter((t) => t.icon); // filter out any undefined icons

export default function TechStackSection() {
    return (
        <SectionContainer className="py-6">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3"
            >
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
                    Tech Stack
                </h3>

                <TooltipProvider delayDuration={0}>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => {
                            const IconComponent = tech.icon;
                            if (!IconComponent) return null;
                            return (
                                <Tooltip key={tech.name}>
                                    <TooltipTrigger asChild>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.02 * index }}
                                            className="w-9 h-9 rounded-lg bg-card border border-border/40 flex items-center justify-center hover:bg-muted/80 hover:border-primary/30 hover:scale-110 transition-all duration-200 cursor-default group"
                                        >
                                            <IconComponent
                                                className="w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-110"
                                                style={{ color: tech.color }}
                                            />
                                        </motion.div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tech.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                </TooltipProvider>
            </motion.div>
        </SectionContainer>
    );
}
