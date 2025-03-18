import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Vedic Healing & Wellness",
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-sage-5 to-sage-100/50">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-br from-sage-900 via-emerald-900 to-sage-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <img
            src="/VHW.png"
            alt="logo"
            className="w-20 h-20 mx-auto mb-8 animate-spin-slow"
          />
          {/* <div className="w-16 h-16 mx-auto mb-8 text-emerald-400" /> */}
          <h1 className="text-5xl md:text-7xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            Connect With Us
          </h1>
          <p className="text-2xl text-sage-200 max-w-3xl mx-auto font-['Cormorant_Garamond'] italic">
            Begin Your Journey to Wellness
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-['Cormorant_Garamond'] text-sage-900 mb-12">
              Visit Our Sacred Space
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900 mb-2">
                    Location
                  </h3>
                  <p className="text-sage-700 text-lg">
                    Vedic Healing & Wellness
                    <br />
                    79 Revere Blvd
                    <br />
                    Edison, NJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-sage-700 text-lg">
                    <a
                      href="tel:732-476-4754"
                      className="hover:text-emerald-700 transition-colors"
                    >
                      732-476-4754
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900 mb-2">
                    Email
                  </h3>
                  <p className="text-sage-700 text-lg">
                    <a
                      href="mailto:swathi@vedicwellness.com"
                      className="hover:text-emerald-700 transition-colors"
                    >
                      swathi@vedicwellness.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-sage-700 text-lg">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-sage-100 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5732.096998565698!2d-74.3647365949932!3d40.57277398952465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf5594bf28f75ded%3A0x542aaf7e2d09dce8!2sVedic%20Healing%20%26%20Wellness!5e0!3m2!1sen!2sin!4v1741688496161!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/DCX9gYXUR6owgYTCA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 text-lg font-medium"
              >
                View on Google Maps <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-sage-100">
            <h2 className="text-4xl font-['Cormorant_Garamond'] text-sage-900 mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sage-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sage-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sage-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-full text-white font-medium transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-sage-400 cursor-not-allowed"
                    : "bg-emerald-700 hover:bg-emerald-800 hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-emerald-600 text-center">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
        {/* Sri Sri Tattva Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="lotus-divider mb-12" />
          <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-3xl p-8 shadow-sm border border-sage-100">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Sri Sri Tattva Franchise
            </h3>
            <p className="text-xl text-sage-700 mb-8">
              We are proud to be a Sri Sri Tattva Franchise, ensuring that every
              treatment follows the highest standards of Ayurvedic tradition and
              expertise.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-sage-900 to-emerald-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative">
            <h2 className="text-3xl font-['Cormorant_Garamond'] text-sage-50 mb-8">
              Begin Your Wellness Journey
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-sage-200">📍 Edison, NJ</p>
              <p className="text-xl text-sage-200">📞 732-476-4754</p>
            </div>
            <Link to="https://calendly.com/vedichealingwellness">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-sage-50 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-500/30">
                Book an Appointment Today <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
