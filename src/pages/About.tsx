import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="pt-20 bg-sage-50">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-br from-sage-900 via-emerald-900 to-sage-900 flex justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="/VHW.png"
            alt="logo"
            className="w-20 h-20 mx-auto mb-8 animate-spin-slow"
          />
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            Healing Through Ayurveda & Wellness
          </h1>
          <p className="text-xl text-sage-200 max-w-3xl">
            Vedic Healing & Wellness (VHW) is founded on the principles of
            authentic Ayurveda, offering traditional treatments to support your
            mind, body, and spirit.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Founder */}
        <div className="mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] text-sage-900 mb-12 text-center">
            Meet Our Founder
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-sage-600/20 rounded-2xl transform rotate-3"></div>
                <img
                  src="Ceo.png"
                  alt="Swathishree Yanamandra"
                  className="relative w-full h-[300px] object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
              <div className="md:col-span-8 relative">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-600/30 -translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-600/30 translate-x-4 translate-y-4"></div>
                <h3 className="text-3xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
                  Swathishree Yanamandra
                </h3>
                <p className="text-sage-600 mb-2 text-lg font-medium">
                  CEO and Founder of VHW
                </p>
                <p className="text-sage-700 mb-6 leading-relaxed">
                  An Advanced Marma Practitioner, Breathwork & Meditation
                  Instructor, and a Counselor. With extensive training from the
                  Art of Living Foundation, she combines Ayurveda, psychology,
                  and holistic healing to bring transformational wellness to her
                  clients. She has a masters degree in Psychology from Bombay
                  University and is a licensed Massage & Bodywork therapist. She
                  has undergone training from Sri Sri Tattva and the Art of
                  Living Foundation in Ayurveda treatments and basic/advanced
                  Marma healing. She is also an instructor with the Art of
                  Living Foundation and teaches the SKY Breath Meditation and
                  Sleep & Anxiety Protocol.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-sage-600">
                  <span className="px-4 py-2 bg-sage-100 rounded-full">
                    Advanced Marma Practitioner
                  </span>
                  <span className="px-4 py-2 bg-sage-100 rounded-full">
                    Meditation Instructor
                  </span>
                  <span className="px-4 py-2 bg-sage-100 rounded-full">
                    Counselor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] text-sage-900 mb-12 text-center">
            Our Advisor
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 relative order-2 md:order-1">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-600/30 -translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-600/30 translate-x-4 translate-y-4"></div>
                <h3 className="text-3xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
                  Shravan Bharathula
                </h3>
                <p className="text-sage-600 mb-2 text-lg font-medium">
                  Art of Living Instructor
                </p>
                <p className="text-sage-700 mb-6 leading-relaxed">
                  With 18+ years of experience teaching SKY Breath Meditation,
                  Sahaj Samadhi, Sri Sri Yoga, Sleep & Anxiety Protocol and
                  Silent Retreats. He discovered SKY during his IIT Bombay days
                  and has been practicing for 30 years. Passionate about
                  community wellness, he leads meditation, breathwork, yoga and
                  silence programs. A RYT-300 Yoga Alliance-certified teacher,
                  he has also undergone Marma healing training from the Art of
                  Living Foundation. Shravan holds a Master of Science from
                  Carnegie Mellon University and works in Data Strategy at an
                  investment bank in New York City.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-sage-600">
                  <span className="px-4 py-2 bg-sage-100 rounded-full">
                    SKY Meditation Expert
                  </span>
                  <span className="px-4 py-2 bg-sage-100 rounded-full">
                    Yoga Instructor
                  </span>
                  <span className="px-4 py-2 bg-sage-100 rounded-full">
                    Wellness Coach
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 relative order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-sage-600/20 rounded-2xl transform -rotate-3"></div>
                <img
                  src="Shravan.png"
                  alt="Shravan Bharathula"
                  className="relative w-full h-[300px] object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
            </div>
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

export default About;
