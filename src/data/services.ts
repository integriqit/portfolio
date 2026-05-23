import {
  Banknote,
  BarChart3,
  Building, // Added for Enterprise
  Building2,
  CandlestickChart, // Added for Trading
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
  ShoppingBag, // Added for E-commerce
  Smartphone,
  TrendingUp,
  UserCheck,
  Wallet,
  Zap,
} from 'lucide-react';
import EKYCImage1 from '../assets/EKYC-1.jpeg';
import EKYCImage2 from '../assets/EKYC-2.jpeg';
import EKYCImage3 from '../assets/EKYC-3.jpeg';
import EKYCImage4 from '../assets/EKYC-4.jpeg';
import EKYCImage from '../assets/EKYC.jpeg';

export const solutions = {
  title: 'Our Digital Solutions',
  subtitle: "Comprehensive fintech solutions tailored for Bangladesh's growing digital economy",

  ekyc: {
    title: 'eKYC (Electronic Know Your Customer)',
    description:
      'Seamless digital identity verification with NID integration and personal document submission.',
    features: [
      {
        title: 'Upload NID Documents',
        description: 'Submit your National ID documents securely for verification.',
      },
      {
        title: 'NID Information',
        description: 'Automatically fetch and validate your NID details.',
      },
      {
        title: 'Personal Information',
        description: 'Provide your personal details accurately for account setup.',
      },
      {
        title: 'Face Capture',
        description: 'Take a photo of your face for biometric authentication.',
      },
      {
        title: 'Upload Signature',
        description: 'Submit your signature digitally for verification and documentation.',
      },
    ],
  },
  mfs: {
    title: 'MFS (Mobile Financial Services)',
    description: 'Complete mobile money solution for everyday transactions',
    features: [
      {
        title: 'Secure Transactions',
        description: 'End-to-end encryption and fraud prevention for safe mobile payments.',
      },
      {
        title: 'Mobile Top-ups',
        description: 'Easily recharge any mobile number from within the app.',
      },
      {
        title: 'Utility Bill Payments',
        description: 'Pay electricity, gas, and water bills instantly without visiting counters.',
      },
      {
        title: 'Money Transfer',
        description: 'Send and receive money to any MFS account nationwide in seconds.',
      },
    ],
  },
  psp: {
    title: 'PSP (Payment Service Provider)',
    description: 'Advanced payment gateway solutions for businesses',
    features: [
      {
        title: 'Merchant Solutions',
        description: 'Customizable checkout systems for online and offline merchants.',
      },
      {
        title: 'QR Code Payments',
        description: 'Enable fast and secure transactions through QR code scanning.',
      },
      {
        title: 'API Integration',
        description: 'Seamlessly integrate payment options into websites and apps.',
      },
      {
        title: 'Real-time Analytics',
        description: 'Monitor transactions, sales trends, and performance in real-time.',
      },
    ],
  },
  dfs: {
    title: 'DFS (Digital Financial Services)',
    description: 'Comprehensive digital banking and financial services',
    features: [
      {
        title: 'Digital Wallets',
        description: 'Store funds, make payments, and manage money in one secure wallet.',
      },
      {
        title: 'Banking APIs',
        description: 'Connect to banks directly via secure, standards-compliant APIs.',
      },
      {
        title: 'Bill Payments',
        description: 'Pay any type of bill conveniently from your phone or desktop.',
      },
      {
        title: 'Savings & Loans',
        description: 'Open savings accounts and apply for micro-loans digitally.',
      },
    ],
  },
  enterprise: {
    title: 'Enterprise Solutions',
    description: 'Institutional & corporate banking ledger systems',
    features: [
      {
        title: 'Bulk Payroll Management',
        description: 'Automated, high-volume salary disbursements directly to employees.',
      },
      {
        title: 'ERP Ledger Connectors',
        description: 'Direct API pipelines to synchronize real-time financial logs.',
      },
      {
        title: 'Multi-Sig Authorization',
        description: 'Robust, multi-tiered corporate approval security matrices.',
      },
      {
        title: 'B2B Settlement Engine',
        description: 'High-throughput infrastructure for wholesale supply chain clearing.',
      },
    ],
  },
  ecommerce: {
    title: 'E-commerce Solutions',
    description: 'Frictionless merchant payment gateways for scales',
    features: [
      {
        title: 'Plug-and-Play Plugins',
        description: 'Instant merchant integration widgets for WooCommerce and Shopify.',
      },
      {
        title: 'One-Click Checkouts',
        description: 'Tokenized saved card mechanics for blistering checkout velocity.',
      },
      {
        title: 'Instant Split Settlements',
        description: 'Automated real-time vendor commission splits directly at checkout.',
      },
      {
        title: 'Risk-Score Fraud Mitigation',
        description: 'Advanced heuristics engine tracking anomalies before authorization.',
      },
    ],
  },
  trading: {
    title: 'Trading Solutions',
    description: 'Investment and capital markets high-performance ledger',
    features: [
      {
        title: 'Real-Time Market Feeds',
        description: 'Ultra-low latency data pipelines for pricing accuracy.',
      },
      {
        title: 'Fractional Investment Modules',
        description: 'Micro-investment enablement structures for retail scale access.',
      },
      {
        title: 'Secure Escrow Ledgers',
        description: 'Automated compliance holding systems guaranteeing clearing security.',
      },
      {
        title: 'FIX Protocol Integration',
        description: 'Standardized institutional integration layers for seamless capital access.',
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
    gradient: 'bg-gradient-primary',
    path: '/services/ekyc',
  },
  {
    icon: Smartphone,
    title: solutions.mfs.title,
    description: solutions.mfs.description,
    features: solutions.mfs.features.map((f) => f.title),
    gradient: 'bg-gradient-primary',
    path: '/services/mfs',
  },
  {
    icon: CreditCard,
    title: solutions.psp.title,
    description: solutions.psp.description,
    features: solutions.psp.features.map((f) => f.title),
    gradient: 'bg-gradient-secondary',
    path: '/services/psp',
  },
  {
    icon: Banknote,
    title: solutions.dfs.title,
    description: solutions.dfs.description,
    features: solutions.dfs.features.map((f) => f.title),
    gradient: 'bg-gradient-accent',
    path: '/services/dfs',
  },
  {
    icon: Building,
    title: solutions.enterprise.title,
    description: solutions.enterprise.description,
    features: solutions.enterprise.features.map((f) => f.title),
    gradient: 'bg-gradient-primary',
    path: '/services/enterprise',
  },
  {
    icon: ShoppingBag,
    title: solutions.ecommerce.title,
    description: solutions.ecommerce.description,
    features: solutions.ecommerce.features.map((f) => f.title),
    gradient: 'bg-gradient-secondary',
    path: '/services/ecommerce',
  },
  {
    icon: CandlestickChart,
    title: solutions.trading.title,
    description: solutions.trading.description,
    features: solutions.trading.features.map((f) => f.title),
    gradient: 'bg-gradient-accent',
    path: '/services/trading',
  },
];

export const EKYCFeatures = [
  {
    title: 'Upload NID Documents',
    description: 'Submit your National ID securely.',
    icon: FileCheck,
    highlight: 'Secure Upload',
  },
  {
    title: 'NID Information',
    description: 'Automatically fetch and validate your NID details.',
    icon: Layers,
    highlight: 'Govt Integrated',
  },
  {
    title: 'Personal Information',
    description: 'Provide personal details accurately.',
    icon: UserCheck,
    highlight: 'Accurate Data',
  },
  {
    title: 'Face Capture',
    description: 'Capture your face for biometric authentication.',
    icon: Fingerprint,
    highlight: 'AI-Powered',
  },
  {
    title: 'Upload Signature',
    description: 'Submit your signature digitally.',
    icon: CheckCircle,
    highlight: 'Digital Signature',
  },
];

export const appSteps = [
  {
    image: EKYCImage,
    title: 'Welcome & Start',
    description: 'Open the app and start your digital identity verification journey.',
  },
  {
    image: EKYCImage1,
    title: 'Upload NID',
    description: 'Securely upload your National ID to initiate verification.',
  },
  {
    image: EKYCImage2,
    title: 'NID Validation',
    description: 'The system automatically fetches and validates your NID details.',
  },
  {
    image: EKYCImage3,
    title: 'Face Capture',
    description: 'Capture your face for biometric authentication to ensure security.',
  },
  {
    image: EKYCImage4,
    title: 'Digital Signature',
    description: 'Submit your signature digitally to complete the verification process.',
  },
];

export const dfsData = {
  title: 'DFS (Digital Financial Services)',
  description: 'Comprehensive digital banking and financial services',
  detailedDescription:
    'Digital Financial Services (DFS) platform provides comprehensive digital banking solutions that bridge the gap between traditional banking and modern digital finance, offering everything from digital wallets to micro-lending services.',
  features: [
    {
      title: 'Digital Wallets',
      description: 'Store funds, make payments, and manage money in one secure wallet.',
      icon: Wallet,
      highlight: 'Multi-Currency',
    },
    {
      title: 'Banking APIs',
      description: 'Connect to banks directly via secure, standards-compliant APIs.',
      icon: Building2,
      highlight: 'Bank Integration',
    },
    {
      title: 'Bill Payments',
      description: 'Pay any type of bill conveniently from your phone or desktop.',
      icon: Receipt,
      highlight: 'All Utilities',
    },
    {
      title: 'Savings & Loans',
      description: 'Open savings accounts and apply for micro-loans digitally.',
      icon: PiggyBank,
      highlight: 'Instant Approval',
    },
  ],
  benefits: [
    'Complete digital banking experience without visiting branches',
    'Competitive interest rates on savings and fixed deposits',
    'Instant loan approvals with AI-powered credit scoring',
    'Comprehensive financial planning and budgeting tools',
    'Multi-currency support for international transactions',
    'Enhanced security with biometric authentication',
  ],
  techSpecs: [
    'Core banking integration',
    'API-first architecture',
    'Mobile-responsive design',
    'Regulatory compliance',
    'Real-time settlements',
    'Blockchain security',
  ],
};

export const mfsData = {
  title: 'MFS (Mobile Financial Services)',
  description: 'Complete mobile money solution for everyday transactions',
  detailedDescription:
    'Our Mobile Financial Services (MFS) platform provides a comprehensive mobile money solution that empowers millions of Bangladeshi users with secure, convenient, and accessible financial services directly from their mobile devices.',
  features: [
    {
      title: 'Secure Transactions',
      description: 'End-to-end encryption and fraud prevention for safe mobile payments.',
      icon: Shield,
      highlight: '99.9% Security Rate',
    },
    {
      title: 'Mobile Top-ups',
      description: 'Easily recharge any mobile number from within the app.',
      icon: Smartphone,
      highlight: 'All Networks',
    },
    {
      title: 'Utility Bill Payments',
      description: 'Pay electricity, gas, and water bills instantly without visiting counters.',
      icon: Zap,
      highlight: '24/7 Available',
    },
    {
      title: 'Money Transfer',
      description: 'Send and receive money to any MFS account nationwide in seconds.',
      icon: TrendingUp,
      highlight: 'Instant Transfer',
    },
  ],
};

export const pspData = {
  title: 'PSP (Payment Service Provider)',
  description: 'Advanced payment gateway solutions for businesses',
  detailedDescription:
    'Our Payment Service Provider (PSP) solution offers robust payment gateway services that enable businesses to accept payments seamlessly across multiple channels, from online e-commerce to physical point-of-sale systems.',
  features: [
    {
      title: 'Merchant Solutions',
      description: 'Customizable checkout systems for online and offline merchants.',
      icon: CreditCard,
      highlight: 'All Payment Methods',
    },
    {
      title: 'QR Code Payments',
      description: 'Enable fast and secure transactions through QR code scanning.',
      icon: QrCode,
      highlight: 'Instant Payments',
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate payment options into websites and apps.',
      icon: Globe,
      highlight: 'Developer Friendly',
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor transactions, sales trends, and performance in real-time.',
      icon: BarChart3,
      highlight: 'Live Dashboard',
    },
  ],
  benefits: [
    'Accept all major payment methods including cards, mobile wallets, and bank transfers',
    'Lower processing fees compared to traditional payment processors',
    'Advanced fraud detection and prevention systems',
    '24/7 customer support for merchants and end users',
    'Instant settlement options for improved cash flow',
    'Comprehensive reporting and analytics dashboard',
  ],
  techSpecs: [
    'PCI DSS certified',
    'Multi-payment methods',
    'Real-time reporting',
    'Fraud prevention systems',
    'REST APIs',
    'Webhook notifications',
  ],
};

export const enterpriseData = {
  title: 'Enterprise Solutions',
  description: 'Institutional & corporate banking ledger systems',
  detailedDescription:
    'Engineered for enterprise scale, our solution offers core multi-tenant infrastructures that optimize institutional operations—from mass payroll workflows to heavy-duty custom ERP connections.',
  features: [
    {
      title: 'Bulk Payroll Management',
      description: 'Automated, high-volume salary disbursements directly to employees.',
      icon: Layers,
      highlight: 'Automated Disbursement',
    },
    {
      title: 'ERP Ledger Connectors',
      description: 'Direct API pipelines to synchronize real-time financial logs.',
      icon: Building2,
      highlight: 'Real-time Sync',
    },
    {
      title: 'Multi-Sig Authorization',
      description: 'Robust, multi-tiered corporate approval security matrices.',
      icon: Shield,
      highlight: 'Multi-tier Sign-off',
    },
    {
      title: 'B2B Settlement Engine',
      description: 'High-throughput infrastructure for wholesale supply chain clearing.',
      icon: BarChart3,
      highlight: 'High Throughput',
    },
  ],
  benefits: [
    'Eliminate manual processing friction via completely automated disbursements',
    'Seamless real-time adjustments with structural banking ledgers',
    'Drastically lower corporate processing fees on high-volume settlements',
    'Total administrative control over transactional authentication permissions',
    'Enterprise dashboard built specifically for deep analytical overviews',
  ],
  techSpecs: [
    'Java & Python core engine',
    'Native multi-tenancy layer',
    'ERP connector nodes',
    'Automated reconciliation hooks',
    'Advanced access tokens (RBAC)',
  ],
};

export const ecommerceData = {
  title: 'E-commerce Solutions',
  description: 'Frictionless merchant payment gateways for scale',
  detailedDescription:
    'A developer-first suite offering lightning-fast integration pipelines, automated multi-vendor splits, and intelligent transactional optimization metrics.',
  features: [
    {
      title: 'Plug-and-Play Plugins',
      description: 'Instant merchant integration widgets for WooCommerce and Shopify.',
      icon: ShoppingBag,
      highlight: 'CMS Supported',
    },
    {
      title: 'One-Click Checkouts',
      description: 'Tokenized saved card mechanics for blistering checkout velocity.',
      icon: CreditCard,
      highlight: 'Tokenized Security',
    },
    {
      title: 'Instant Split Settlements',
      description: 'Automated real-time vendor commission splits directly at checkout.',
      icon: Zap,
      highlight: 'Zero Escrow Lag',
    },
    {
      title: 'Risk-Score Fraud Mitigation',
      description: 'Advanced heuristics engine tracking anomalies before authorization.',
      icon: Shield,
      highlight: 'Heuristic AI Engine',
    },
  ],
  benefits: [
    'Reduce cart abandonment metrics instantly via lightning-fast checkouts',
    'Provide plug-and-play modules for all notable regional platforms',
    'Inbuilt, transparent, automatic multi-vendor commission splits',
    'Comprehensive protection layers parsing localized behavioral fraud patterns',
  ],
  techSpecs: [
    'API-driven structural node base',
    'Webhook processing channels',
    'Plugin modular components',
    'PCI-DSS standard pipelines',
  ],
};

export const tradingData = {
  title: 'Trading Solutions',
  description: 'Investment and capital markets high-performance ledger',
  detailedDescription:
    'An institutional-grade infrastructure suite tracking and routing capital allocations into fractionalized markets securely and with ultra-low latency.',
  features: [
    {
      title: 'Real-Time Market Feeds',
      description: 'Ultra-low latency data pipelines for pricing accuracy.',
      icon: BarChart3,
      highlight: 'Sub-millisecond Sync',
    },
    {
      title: 'Fractional Investment Modules',
      description: 'Micro-investment enablement structures for retail scale access.',
      icon: Banknote,
      highlight: 'Micro-Asset Support',
    },
    {
      title: 'Secure Escrow Ledgers',
      description: 'Automated compliance holding systems guaranteeing clearing security.',
      icon: Shield,
      highlight: 'Immutable Ledgering',
    },
    {
      title: 'FIX Protocol Integration',
      description: 'Standardized institutional integration layers for seamless capital access.',
      icon: Globe,
      highlight: 'FIX Compliant',
    },
  ],
  benefits: [
    'High-speed transaction matching for capital market assets',
    'Granular fractional engine expanding target market availability',
    'Integrated secure clearing locks keeping assets robustly protected',
    'Unified institutional connectivity channels out of the box',
  ],
  techSpecs: [
    'FIX protocol native layout',
    'High-throughput transactional ledgering',
    'Digital tokenization layers',
    'Regulatory verification endpoints',
  ],
};
