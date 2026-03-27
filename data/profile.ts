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
  tagline: "Software Engineer | Full Stack Developer | B.Tech CSE @ IIT Jodhpur",
  bio: "Passionate about building scalable systems and web applications. CS undergrad at IIT Jodhpur with experience in full-stack development, DevOps, and cloud infrastructure.",
  email: "anubhavtandon6424@gmail.com",
  phone: "+91-9805464134",
  location: "IIT Jodhpur, Rajasthan, India",
  avatar: "/profile.jpg",
  resume:
    "https://drive.google.com/file/d/1qBtYoEXa94XjI7i1m7bSzXvLFHU9VBj4/view?usp=sharing",
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
