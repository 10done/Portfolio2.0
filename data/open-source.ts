export interface Contribution {
  title: string;
  organization: string;
  description: string;
  link: string;
  tags: string[];
}

export const contributions: Contribution[] = [
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

