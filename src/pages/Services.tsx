import React from "react";
import { ArrowRight, Waves, Sun, Flame, Flower2, Search } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  iconClassName?: string;
  bgGradient?: string;
}

function ServiceCard({
  icon,
  title,
  description,
  benefits,
  duration,
  iconClassName,
  bgGradient,
}: ServiceCardProps) {
  return (
    <div
      className={`${
        bgGradient || "bg-gradient-to-br from-sage-50/95 to-emerald-50/95"
      } p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-sage-100/50 group hover:-translate-y-1`}
    >
      <div
        className={`w-16 h-16 ${
          iconClassName || "text-emerald-600"
        } mb-8 transform group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-6">
        {title}
      </h3>
      <p className="text-sage-700 mb-8 leading-relaxed text-lg">
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3 text-sage-700">
            <span className="text-emerald-600 font-medium text-xl">✦</span>
            <span className="text-lg">{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-sage-200/30">
        <p className="text-sage-600 text-lg">
          <span className="mr-2">⌛</span>
          {duration}
        </p>
        <button className="bg-emerald-700/90 hover:bg-emerald-800 text-sage-50 px-8 py-3 rounded-full text-base font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30">
          Book Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: <Waves className="w-full h-full" />,
      title: "Abhyanga – Ayurvedic Oil Massage",
      description:
        "A full-body oil massage using warm, herbal-infused oils to nourish tissues, improve circulation, and promote relaxation.",
      benefits: [
        "Relieves muscle tension & fatigue",
        "Supports joint health & detoxification",
      ],
      duration: "60 minutes",
      iconClassName: "text-cyan-600",
      bgGradient: "bg-gradient-to-br from-cyan-50/95 to-blue-50/95",
    },
    {
      icon: <Sun className="w-full h-full" />,
      title: "Shirodhara – Third Eye Therapy",
      description:
        "A continuous flow of warm oil over the forehead to calm the mind, relieve stress, and enhance mental clarity.",
      benefits: [
        "Deep relaxation & improved sleep",
        "Eases migraines, anxiety & tension",
      ],
      duration: "45 minutes",
      iconClassName: "text-amber-600",
      bgGradient: "bg-gradient-to-br from-amber-50/95 to-yellow-50/95",
    },
    {
      icon: <Flame className="w-full h-full" />,
      title: "Basti – Pain & Detox Therapy",
      description:
        "A targeted therapy for back pain, arthritis, and inflammation, where warm herbal oil is pooled in a specific area for healing.",
      benefits: [
        "Reduces stiffness & enhances mobility",
        "Supports detoxification & nourishment",
      ],
      duration: "45 minutes",
      iconClassName: "text-rose-600",
      bgGradient: "bg-gradient-to-br from-rose-50/95 to-red-50/95",
    },
    {
      icon: <Flower2 className="w-full h-full" />,
      title: "Marma Therapy – Energy Healing",
      description:
        "A gentle yet powerful therapy that activates the 107 marma points, improving energy flow and releasing emotional & physical blockages.",
      benefits: [
        "Boosts vitality & immune function",
        "Promotes deep relaxation & healing",
      ],
      duration: "60 minutes",
      iconClassName: "text-emerald-600",
      bgGradient: "bg-gradient-to-br from-emerald-50/95 to-green-50/95",
    },
    {
      icon: <Search className="w-full h-full" />,
      title: "30-Min Initial Ayurvedic Consultation",
      description:
        "Unsure which treatment is right for you? Our expert will assess your dosha (body type) and guide you toward the best Ayurvedic practices for your health.",
      benefits: [
        "Personalized wellness assessment",
        "Custom treatment recommendations",
      ],
      duration: "30 minutes",
      iconClassName: "text-purple-600",
      bgGradient: "bg-gradient-to-br from-purple-50/95 to-violet-50/95",
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-sage-50 to-sage-100/50">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-br from-sage-900 via-emerald-900 to-sage-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <Flower2 className="w-16 h-16 mx-auto mb-8 text-emerald-400 animate-spin-slow" />
          <h1 className="text-5xl md:text-7xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            Sacred Healing Therapies
          </h1>
          <p className="text-2xl text-sage-200 max-w-3xl mx-auto font-['Cormorant_Garamond'] italic">
            Ancient Wisdom for Modern Wellness
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="lotus-divider mb-12 opacity-30" />
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-8 text-sage-900">
            Begin Your Healing Journey Today
          </h2>
          <button className="bg-emerald-700/90 hover:bg-emerald-800 text-sage-50 px-12 py-6 rounded-full text-xl font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto border border-emerald-600/30 group">
            Schedule Your Sacred Treatment
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
