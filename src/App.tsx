import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Star,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import About from "./pages/About";
import Services from "./pages/Services";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center mandala-pattern pt-20"
        style={{
          backgroundColor: "#2D4F3C",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/70 to-emerald-950/70" />
        <div className="relative z-10 text-center text-sage-50 px-4 max-w-4xl mx-auto">
          <img
            src="VHW.png"
            alt="Logo"
            className="w-20 h-20 mx-auto mb-8 animate-spin-slow text-emerald-400"
          />

          <h1 className="text-5xl md:text-7xl font-['Cormorant_Garamond'] mb-6 tracking-wide">
            Vedic Healing & Wellness
          </h1>
          <p className="text-2xl md:text-4xl mb-4 font-['Cormorant_Garamond'] italic">
            Restore • Rebalance • Rejuvenate
          </p>
          <p className="text-xl md:text-2xl mb-8 text-emerald-200">
            Authentic Ayurvedic Healing in New Jersey
          </p>
          <p className="text-lg md:text-xl mb-12 text-sage-200 max-w-3xl mx-auto leading-relaxed">
            At Vedic Healing & Wellness, we bring the ancient wisdom of Ayurveda
            to modern wellness. As a Sri Sri Tattva franchise, we offer holistic
            treatments that restore balance, relieve stress, and revitalize your
            mind and body. Whether you're seeking deep relaxation, pain relief,
            or overall well-being, our therapies are designed to nurture your
            health naturally.
          </p>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-sage-50 px-10 py-5 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-600/30">
            Begin Your Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-sage-50/50 p-10 rounded-2xl shadow-sm border border-sage-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Certified Practitioners
            </h3>
            <p className="text-lg text-sage-700">
              Our experts are trained in Ayurveda & Marma Therapy, ensuring
              authentic and effective treatments
            </p>
          </div>
          <div className="bg-sage-50/50 p-10 rounded-2xl shadow-sm border border-sage-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Personalized Healing
            </h3>
            <p className="text-lg text-sage-700">
              Treatments tailored to your unique body constitution for optimal
              results
            </p>
          </div>
          <div className="bg-sage-50/50 p-10 rounded-2xl shadow-sm border border-sage-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Ancient Wisdom
            </h3>
            <p className="text-lg text-sage-700">
              Therapies rooted in ancient wisdom combined with modern expertise
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-8 text-sage-900">
            Ancient Wisdom for Modern Wellness
          </h2>
          <p className="text-xl text-sage-800 leading-relaxed">
            At Vedic Healing & Wellness, we bring the timeless wisdom of
            Ayurveda to modern life. As a Sri Sri Tattva franchise, we offer
            holistic treatments that harmonize your body, mind, and spirit
            through traditional practices passed down through generations.
          </p>
          <div className="lotus-divider mt-12" />
        </div>

        {/* Enhanced Testimonials Section */}
        <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-3xl p-12 shadow-sm border border-sage-100 mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-12 text-center text-sage-900">
            Sacred Experiences
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                text: "The authentic Ayurvedic treatments here have brought profound healing and balance to my life. The Shirodhara therapy helped me sleep better and reduced my anxiety significantly!",
                author: "Priya M.",
                treatment: "Shirodhara Therapy",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              },
              {
                text: "Found my sanctuary of peace and healing. The Abhyanga massage was deeply relaxing, and my joint pain has reduced significantly. The practitioners here are truly gifted.",
                author: "Michael R.",
                treatment: "Abhyanga Massage",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-white/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sage-600">{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-lg text-sage-700 italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 text-lg font-medium"
            >
              Read More Reviews <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-8 text-sage-900">
            Begin Your Path to Wellness
          </h2>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-sage-50 px-10 py-5 rounded-full text-xl font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-600/30">
            <Calendar className="w-6 h-6" />
            Schedule Your Sacred Journey
          </button>
        </div>
      </div>
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-sage-50">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-sage-900/95 text-sage-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-3">
                  <img src="VHW.png" alt="Logo" className="w-16 h-16" />
                  <span className="text-xl font-['Cormorant_Garamond'] tracking-wide">
                    Vedic Healing & Wellness
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  to="/about"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/blog"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/reviews"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  to="/contact"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Book Now Button */}
              <div className="hidden md:block">
                <button className="bg-emerald-700 hover:bg-emerald-800 px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30">
                  Book Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-sage-800">
                <div className="flex flex-col gap-4">
                  <Link
                    to="/about"
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/"
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    to="/blog"
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/reviews"
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    Reviews
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    Contact
                  </Link>
                  <button className="bg-emerald-700 hover:bg-emerald-800 px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30 w-full justify-center mt-2">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>

        {/* Footer */}
        {/* Footer */}
        <footer className="bg-sage-900 text-sage-100 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Left Section - Logo & Name */}
            <div className="flex flex-col items-center md:items-start">
              <img src="VHW.png" alt="Logo" className="w-20 h-20 mb-3" />
              <h2 className="text-xl font-['Cormorant_Garamond'] font-semibold">
                Vedic Healing & Wellness
              </h2>
            </div>

            {/* Middle Section - Navigation */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="hover:text-sage-300">
                      Who We Are
                    </a>
                  </li>
                  <li>
                    <a href="/team" className="hover:text-sage-300">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-sage-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/ayurveda" className="hover:text-sage-300">
                      Ayurveda Therapy
                    </a>
                  </li>
                  <li>
                    <a href="/yoga" className="hover:text-sage-300">
                      Yoga & Meditation
                    </a>
                  </li>
                  <li>
                    <a href="/herbal" className="hover:text-sage-300">
                      Herbal Remedies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section - Social Links */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-100 text-xl hover:text-sage-300 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-100 text-xl hover:text-sage-300 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-100 text-xl hover:text-sage-300 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center mt-8 text-sm opacity-75">
            © 2025 Vedic Healing & Wellness. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
