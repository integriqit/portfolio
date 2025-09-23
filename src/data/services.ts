import {
  Banknote,
  BarChart3,
  Building2,
  CheckCircle,
  CreditCard,
  FileCheck,
  Fingerprint,
  Globe,
  Layers,
  PiggyBank,
  QrCode,
  Receipt,
  Shield,
  Smartphone,
  TrendingUp,
  UserCheck,
  Wallet,
  Zap,
} from "lucide-react";
import EKYCImage1 from "../assets/EKYC-1.jpeg";
import EKYCImage2 from "../assets/EKYC-2.jpeg";
import EKYCImage3 from "../assets/EKYC-3.jpeg";
import EKYCImage4 from "../assets/EKYC-4.jpeg";
import EKYCImage from "../assets/EKYC.jpeg";

export const solutions = {
  title: "Our Digital Solutions",
  subtitle:
    "Comprehensive fintech solutions tailored for Bangladesh's growing digital economy",

  ekyc: {
    title: "eKYC (Electronic Know Your Customer)",
    description:
      "Seamless digital identity verification with NID integration and personal document submission.",
    features: [
      {
        title: "Upload NID Documents",
        description:
          "Submit your National ID documents securely for verification.",
      },
      {
        title: "NID Information",
        description: "Automatically fetch and validate your NID details.",
      },
      {
        title: "Personal Information",
        description:
          "Provide your personal details accurately for account setup.",
      },
      {
        title: "Face Capture",
        description: "Take a photo of your face for biometric authentication.",
      },
      {
        title: "Upload Signature",
        description:
          "Submit your signature digitally for verification and documentation.",
      },
    ],
  },
  mfs: {
    title: "MFS (Mobile Financial Services)",
    description: "Complete mobile money solution for everyday transactions",
    features: [
      {
        title: "Secure Transactions",
        description:
          "End-to-end encryption and fraud prevention for safe mobile payments.",
      },
      {
        title: "Mobile Top-ups",
        description: "Easily recharge any mobile number from within the app.",
      },
      {
        title: "Utility Bill Payments",
        description:
          "Pay electricity, gas, and water bills instantly without visiting counters.",
      },
      {
        title: "Money Transfer",
        description:
          "Send and receive money to any MFS account nationwide in seconds.",
      },
    ],
  },

  psp: {
    title: "PSP (Payment Service Provider)",
    description: "Advanced payment gateway solutions for businesses",
    features: [
      {
        title: "Merchant Solutions",
        description:
          "Customizable checkout systems for online and offline merchants.",
      },
      {
        title: "QR Code Payments",
        description:
          "Enable fast and secure transactions through QR code scanning.",
      },
      {
        title: "API Integration",
        description:
          "Seamlessly integrate payment options into websites and apps.",
      },
      {
        title: "Real-time Analytics",
        description:
          "Monitor transactions, sales trends, and performance in real-time.",
      },
    ],
  },

  dfs: {
    title: "DFS (Digital Financial Services)",
    description: "Comprehensive digital banking and financial services",
    features: [
      {
        title: "Digital Wallets",
        description:
          "Store funds, make payments, and manage money in one secure wallet.",
      },
      {
        title: "Banking APIs",
        description:
          "Connect to banks directly via secure, standards-compliant APIs.",
      },
      {
        title: "Bill Payments",
        description:
          "Pay any type of bill conveniently from your phone or desktop.",
      },
      {
        title: "Savings & Loans",
        description:
          "Open savings accounts and apply for micro-loans digitally.",
      },
    ],
  },
};

export const services = [
  {
    icon: UserCheck,
    title: solutions.ekyc.title,
    description: solutions.ekyc.description,
    features: solutions.ekyc.features.map((f) => f.title),
    gradient: "bg-gradient-primary",
    path: "/services/ekyc",
  },
  {
    icon: Smartphone,
    title: solutions.mfs.title,
    description: solutions.mfs.description,
    features: solutions.mfs.features.map((f) => f.title),
    gradient: "bg-gradient-primary",
    path: "/services/mfs",
  },
  {
    icon: CreditCard,
    title: solutions.psp.title,
    description: solutions.psp.description,
    features: solutions.psp.features.map((f) => f.title),
    gradient: "bg-gradient-secondary",
    path: "/services/psp",
  },
  {
    icon: Banknote,
    title: solutions.dfs.title,
    description: solutions.dfs.description,
    features: solutions.dfs.features.map((f) => f.title),
    gradient: "bg-gradient-accent",
    path: "/services/dfs",
  },
];

export const EKYCFeatures = [
  {
    title: "Upload NID Documents",
    description: "Submit your National ID securely.",
    icon: FileCheck,
    highlight: "Secure Upload",
  },
  {
    title: "NID Information",
    description: "Automatically fetch and validate your NID details.",
    icon: Layers,
    highlight: "Govt Integrated",
  },
  {
    title: "Personal Information",
    description: "Provide personal details accurately.",
    icon: UserCheck,
    highlight: "Accurate Data",
  },
  {
    title: "Face Capture",
    description: "Capture your face for biometric authentication.",
    icon: Fingerprint,
    highlight: "AI-Powered",
  },
  {
    title: "Upload Signature",
    description: "Submit your signature digitally.",
    icon: CheckCircle,
    highlight: "Digital Signature",
  },
];

export const appSteps = [
  {
    image: EKYCImage,
    title: "Welcome & Start",
    description:
      "Open the app and start your digital identity verification journey.",
  },
  {
    image: EKYCImage1,
    title: "Upload NID",
    description: "Securely upload your National ID to initiate verification.",
  },
  {
    image: EKYCImage2,
    title: "NID Validation",
    description:
      "The system automatically fetches and validates your NID details.",
  },
  {
    image: EKYCImage3,
    title: "Face Capture",
    description:
      "Capture your face for biometric authentication to ensure security.",
  },
  {
    image: EKYCImage4,
    title: "Digital Signature",
    description:
      "Submit your signature digitally to complete the verification process.",
  },
];

export const dfsData = {
  title: "DFS (Digital Financial Services)",
  description: "Comprehensive digital banking and financial services",
  detailedDescription:
    "Digital Financial Services (DFS) platform provides comprehensive digital banking solutions that bridge the gap between traditional banking and modern digital finance, offering everything from digital wallets to micro-lending services.",

  features: [
    {
      title: "Digital Wallets",
      description:
        "Store funds, make payments, and manage money in one secure wallet.",
      icon: Wallet,
      highlight: "Multi-Currency",
    },
    {
      title: "Banking APIs",
      description:
        "Connect to banks directly via secure, standards-compliant APIs.",
      icon: Building2,
      highlight: "Bank Integration",
    },
    {
      title: "Bill Payments",
      description:
        "Pay any type of bill conveniently from your phone or desktop.",
      icon: Receipt,
      highlight: "All Utilities",
    },
    {
      title: "Savings & Loans",
      description: "Open savings accounts and apply for micro-loans digitally.",
      icon: PiggyBank,
      highlight: "Instant Approval",
    },
  ],

  benefits: [
    "Complete digital banking experience without visiting branches",
    "Competitive interest rates on savings and fixed deposits",
    "Instant loan approvals with AI-powered credit scoring",
    "Comprehensive financial planning and budgeting tools",
    "Multi-currency support for international transactions",
    "Enhanced security with biometric authentication",
  ],

  techSpecs: [
    "Core banking integration",
    "API-first architecture",
    "Mobile-responsive design",
    "Regulatory compliance",
    "Real-time settlements",
    "Blockchain security",
  ],
};

export const mfsData = {
  title: "MFS (Mobile Financial Services)",
  description: "Complete mobile money solution for everyday transactions",
  detailedDescription:
    "Our Mobile Financial Services (MFS) platform provides a comprehensive mobile money solution that empowers millions of Bangladeshi users with secure, convenient, and accessible financial services directly from their mobile devices.",

  features: [
    {
      title: "Secure Transactions",
      description:
        "End-to-end encryption and fraud prevention for safe mobile payments.",
      icon: Shield,
      highlight: "99.9% Security Rate",
    },
    {
      title: "Mobile Top-ups",
      description: "Easily recharge any mobile number from within the app.",
      icon: Smartphone,
      highlight: "All Networks",
    },
    {
      title: "Utility Bill Payments",
      description:
        "Pay electricity, gas, and water bills instantly without visiting counters.",
      icon: Zap,
      highlight: "24/7 Available",
    },
    {
      title: "Money Transfer",
      description:
        "Send and receive money to any MFS account nationwide in seconds.",
      icon: TrendingUp,
      highlight: "Instant Transfer",
    },
  ],
};

export const pspData = {
  title: "PSP (Payment Service Provider)",
  description: "Advanced payment gateway solutions for businesses",
  detailedDescription:
    "Our Payment Service Provider (PSP) solution offers robust payment gateway services that enable businesses to accept payments seamlessly across multiple channels, from online e-commerce to physical point-of-sale systems.",

  features: [
    {
      title: "Merchant Solutions",
      description:
        "Customizable checkout systems for online and offline merchants.",
      icon: CreditCard,
      highlight: "All Payment Methods",
    },
    {
      title: "QR Code Payments",
      description:
        "Enable fast and secure transactions through QR code scanning.",
      icon: QrCode,
      highlight: "Instant Payments",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrate payment options into websites and apps.",
      icon: Globe,
      highlight: "Developer Friendly",
    },
    {
      title: "Real-time Analytics",
      description:
        "Monitor transactions, sales trends, and performance in real-time.",
      icon: BarChart3,
      highlight: "Live Dashboard",
    },
  ],

  benefits: [
    "Accept all major payment methods including cards, mobile wallets, and bank transfers",
    "Lower processing fees compared to traditional payment processors",
    "Advanced fraud detection and prevention systems",
    "24/7 customer support for merchants and end users",
    "Instant settlement options for improved cash flow",
    "Comprehensive reporting and analytics dashboard",
  ],

  techSpecs: [
    "PCI DSS certified",
    "Multi-payment methods",
    "Real-time reporting",
    "Fraud prevention systems",
    "REST APIs",
    "Webhook notifications",
  ],
};
