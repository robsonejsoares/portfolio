import {
    Layout,
    Server,
    Database,
    Smartphone,
    Bot,
    GitBranch,
    Palette,
} from "lucide-react";

export const skillCategories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: Layout,
        iconColor: "text-emerald-400",
        skills: [
            { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" },
            { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]" },
            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]" },
            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: Server,
        iconColor: "text-blue-400",
        skills: [
            { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]" },
            { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(13,148,136,0.3)]" },
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]" },
            { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]" },
            { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
            { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]" },
        ],
    },
    {
        id: "database",
        label: "Database",
        icon: Database,
        iconColor: "text-cyan-400",
        skills: [
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
            { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(22,163,74,0.3)]" },
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", shadow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]" },
            {
                name: "Prisma ORM",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
                shadow: "hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]",
                extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]",
            },
        ],
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        iconColor: "text-violet-400",
        skills: [
            { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]" },
            {
                name: "Expo & Router",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
                shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]",
                extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]",
            },
        ],
    },
    {
        id: "ai",
        label: "Automação",
        icon: Bot,
        iconColor: "text-amber-400",
        skills: [
            {
                name: "Agentes IA",
                logo: "",
                shadow: "hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]",
                extraClass: "",
            },
            { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", shadow: "hover:shadow-[0_0_15px_rgba(234,75,113,0.3)]" },
        ],
    },
    {
        id: "devops",
        label: "DevOps",
        icon: GitBranch,
        iconColor: "text-orange-400",
        skills: [
            { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
        ],
    },
    {
        id: "uiux",
        label: "UI/UX Design",
        icon: Palette,
        iconColor: "text-pink-400",
        skills: [
            { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]" },
            {
                name: "Adobe XD",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
                shadow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
                extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]",
            },
            { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]" },
            { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF", shadow: "hover:shadow-[0_0_15px_rgba(0,85,255,0.3)]" },
        ],
    },
] as const;