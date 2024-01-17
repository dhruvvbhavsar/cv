import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dhruv Bhavsar",
  initials: "DB",
  location: "Mumbai, India, IST",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about: "Budding Full Stack Engineer focused on building great products",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, NextJs 13,React Server Components, Node.js. I have over 1 year of experience developing full stack apps on React and Svelte.",
  avatarUrl: "https://avatars.githubusercontent.com/u/53689302?v=4",
  personalWebsiteUrl: "https://dhruv.ninja",
  contact: {
    email: "dhruv.bhavsar75@gmail.com",
    tel: "+91 771 594 4948",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dhruvvbhavsar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruvvbhavsar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/devsbond007",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "KJ Somaiya Institute of Technology",
      degree: "Bachelor's Degree in AI and Data Science",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Picostone Technologies",
      link: "https://www.picostone.com/",
      badges: ["Hybrid"],
      title: "Full Stack Intern",
      start: "Aug 2023",
      end: "Present",
      description:
        "A personalized quotation generation system was engineered to create quotes in minutes, reducing the average time from 30 minutes in MS Excel and leading to a 60% reduction in quote generation time and a 25% increase in customer satisfaction. Additionally, a comprehensive full-stack project management application was developed, resulting in a 50% reduction in project coordination time and a 30% increase in overall project efficiency by replacing manual Excel-based processes. Furthermore, a customized CI/CD pipeline was designed and established for the codebase within Bitbucket, reducing deployment time by 40% and enhancing the development team's productivity",
    },
    {
      company: "NextGen Techno Ventures",
      badges: ["In Office"],
      title: "Frontend Intern",
      start: "Jun 2023",
      end: "Jul 2023",
      description:
        "successfully converted Figma designs into pixel-perfect frontend code, reducing the transition time from design concepts to web implementation. Robust user authentication mechanisms were implemented, enhancing user data security and improving the user experience. Additionally, the latest Next.js 13 application and router, combined with React Server Components, were leveraged to achieve exceptional performance in web applications, leading to a 50% reduction in page load times and a more responsive user interface",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React/Next.js/Remix",
    "Node.js",
    "Svelte/SvelteKit",
    "Tailwind",
    "AWS/GCP",
    "AI/Machine Learning",
    "React Server Components",
    "Docker",
    "Git"
  ],
  projects: [
    {
      title: "Shubhsambandh",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js 13",
        "Turbopack",
        "Prisma",
        "Tailwind",
        "Postgres",
        "Lucia Auth"
      ],
      description: "A platform for the Bachelors in India vasishnav community to connect with each other",
      link: {
        label: "shubhsambandh.com",
        href: "https://shubhsambandh.com/",
      },
    },
    {
      title: "Pneumonia Detector",
      techStack: [
        "College Project",
        "Python",
        "Computer Vision",
        "Machine Learning",
      ],
      description: "A project that tells you if your lungs had pneumonia or not",
      link: {
        label: "Colab Notebook",
        href: "https://colab.research.google.com/drive/1oxHJByaaG-SFw48-f50_KzmIeqDRM1ic?usp=sharing",
      },
    },
    {
      title: "Krishna AI",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Open AI",
        "gpt-3.5",
        "Tailwind",
      ],
      description: "Talk to lord krishna.",
      link: {
        label: "krishna-ai.vercel.app",
        href: "https://krishna-ai.vercel.app/",
      },
    }
  ],
} as const;
