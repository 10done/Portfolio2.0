export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  avatar?: string;
  resume?: string;
  calLink?: string;
  socialLinks: SocialLink[];
}

export const profileData: ProfileData = {
  name: "Anubhav Tandon",
  tagline: "AI Engineer | Full-Stack Software Engineer | Founder @ Plate8 | IIT Jodhpur CSE",
  bio: "AI Engineer and IIT Jodhpur CSE graduate who builds production LLM agents, real-time voice AI and data-heavy backends. Founder of Plate8, a conversational AI back-of-house agent for independent restaurants and small chains that bill on a POS. Ships AI systems end to end: tool-calling agents, voice interfaces, speech-to-text, offline evals and multi-tenant backends on AWS.",
  email: "anubhavtandon6424@gmail.com",
  phone: "+91-9805464134",
  location: "Chandigarh, India / Bangalore, India",
  avatar: "/profile.jpg",
  resume:
    "https://drive.google.com/file/d/1hclbJgPlHbOr0QIhoQSmNooVpzbyFuZM/view?usp=sharing",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/10done",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/anubhav-tandon-9b8737245/",
      icon: "linkedin",
    },
    {
      platform: "Email",
      url: "mailto:anubhavtandon6424@gmail.com",
      icon: "mail",
    },
  ],
};
