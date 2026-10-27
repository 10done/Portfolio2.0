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
  bio: "AI Engineer and Full-Stack Software Engineer (Python, TypeScript, React, Next.js, FastAPI) and IIT Jodhpur CSE graduate. Founder of Plate8, an AI restaurant operations platform with 3 restaurants in pilot. Builds production LLM applications end to end: AI agents with tool calling, RAG, speech-to-text, LLM evals and multi-tenant backends on AWS.",
  email: "anubhavtandon6424@gmail.com",
  phone: "+91-9805464134",
  location: "Jodhpur, Rajasthan, India",
  avatar: "/profile.jpg",
  resume:
    "https://drive.google.com/file/d/135J6bj34Uj0DcAXtX49iLw7rwfCUWVm1/view?usp=sharing",
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
