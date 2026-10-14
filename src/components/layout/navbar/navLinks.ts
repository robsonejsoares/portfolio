import {
    Home,
    User,
    Cpu,
    FolderGit2,
    Layers,
    Briefcase,
    GraduationCap,
    Mail,
} from "lucide-react";

export const navLinks = [
    { name: "Início", href: "#hero", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Habilidades", href: "#skills", icon: Cpu },
    { name: "Projetos", href: "#projects", icon: FolderGit2 },
    { name: "Serviços", href: "#services", icon: Layers },
    { name: "Experiência", href: "#experience", icon: Briefcase },
    { name: "Formação", href: "#education", icon: GraduationCap },
];

export const mobileNavLinks = [
    ...navLinks,
    { name: "Contato", href: "#contact", icon: Mail },
];