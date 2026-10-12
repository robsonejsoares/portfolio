import {
    Home,
    User,
    Cpu,
    FolderGit2,
    Briefcase,
    Layers,
    Mail,
} from "lucide-react";

export const navLinks = [
    { name: "Início", href: "#hero", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Habilidades", href: "#skills", icon: Cpu },
    { name: "Projetos", href: "#projects", icon: FolderGit2 },
    { name: "Experiência", href: "#experience", icon: Briefcase },
    { name: "Serviços", href: "#services", icon: Layers },
];

export const mobileNavLinks = [
    ...navLinks,
    { name: "Contato", href: "#contact", icon: Mail },
];