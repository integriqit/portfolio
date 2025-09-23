import { FaAndroid, FaApple, FaDatabase, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

export const technologies = [
  {
    title: "Java",
    description:
      "Robust and widely-used programming language powering enterprise-grade applications.",
    icon: FaJava,
    color: "text-red-500",
    badge: "Backend",
  },
  {
    title: "Spring Boot",
    description:
      "Framework for building production-ready Java applications with speed and simplicity.",
    icon: SiSpringboot,
    color: "text-green-600",
    badge: "Framework",
  },
  {
    title: "Node.js",
    description: "Event-driven runtime for scalable backend services.",
    icon: SiNodedotjs,
    color: "text-green-500",
    badge: "Backend",
  },
  {
    title: "Python",
    description:
      "Versatile language used for AI, data, and backend development.",
    icon: SiPython,
    color: "text-yellow-400",
    badge: "Backend",
  },
  {
    title: "MongoDB",
    description: "NoSQL database built for modern, high-performance apps.",
    icon: SiMongodb,
    color: "text-green-600",
    badge: "Database",
  },
  {
    title: "RDBMS",
    description:
      "Reliable relational database systems for structured data management.",
    icon: FaDatabase,
    color: "text-indigo-500",
    badge: "Database",
  },
  {
    title: "React",
    description: "Fast and flexible library for building interactive UIs.",
    icon: SiReact,
    color: "text-sky-400",
    badge: "Frontend",
  },
  {
    title: "Angular",
    description: "Powerful frontend framework for scalable web apps.",
    icon: SiAngular,
    color: "text-red-600",
    badge: "Frontend",
  },

  {
    title: "TypeScript",
    description: "Typed superset of JavaScript for scalable applications.",
    icon: SiTypescript,
    color: "text-blue-500",
    badge: "Language",
  },
  {
    title: "JavaScript",
    description: "Core web language for dynamic and interactive applications.",
    icon: SiJavascript,
    color: "text-yellow-500",
    badge: "Language",
  },
  {
    title: "Android",
    description: "Powering apps for billions of Android devices worldwide.",
    icon: FaAndroid,
    color: "text-green-500",
    badge: "Mobile",
  },
  {
    title: "iOS",
    description: "Native mobile apps built for Apple devices.",
    icon: FaApple,
    color: "text-gray-300",
    badge: "Mobile",
  },
];
