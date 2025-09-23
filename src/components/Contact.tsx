import { ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Road:33, House: 6, Gulshan, Dhaka, Bangladesh"],
      color: "text-neo-purple",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+8801717-797343"],
      color: "text-neo-cyan",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["integriqit@gmail.com"],
      color: "text-neo-pink",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Customer Support"],
      color: "text-neo-blue",
    },
  ];

  const faqs = [
    {
      question: "How do I open an account?",
      answer:
        "You can open a digital account in just minutes using our mobile app. Simply download it from Google Play or the App Store, and follow the sign-up steps.",
    },
    {
      question: "Is IntegriQ IT licensed?",
      answer:
        "Yes. We are registered in Bangladesh and operate under guidelines issued by Bangladesh Bank, ensuring security and compliance.",
    },
    {
      question: "What services do you offer?",
      answer:
        "Our services include mobile banking, digital wallet, peer-to-peer transfers, bill payments, and investment solutions.",
    },
    {
      question: "How secure are my transactions?",
      answer:
        "We use advanced encryption, fraud monitoring, and two-factor authentication to ensure your funds and data are protected.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Our customer support team is available 24/7 via phone, email, or live chat within the app.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-neo-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-neo-cyan/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Get in Touch
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              FAQ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you get started with IntegriQ IT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Details
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-6 p-6 rounded-2xl bg-dark-elevated/50 border border-border/20 hover:border-primary/30 hover:shadow-neon transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-surface rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <info.icon className={`h-7 w-7 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-muted-foreground text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: FAQ */}
          <Card className="shadow-elevated border-border/20 bg-dark-elevated/80 backdrop-blur-sm overflow-hidden relative">
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl text-foreground">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-border/20 rounded-xl p-4 bg-dark-surface/50 hover:border-primary/30 transition-all duration-300"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-medium text-foreground">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
