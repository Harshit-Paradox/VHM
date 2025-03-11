import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="pt-20 bg-sage-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-sage-900 to-emerald-900">
        <div className="max-w-6xl mx-auto px-4">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="Ceo.png"
                alt="Swathishree Yanamandra"
                className="w-full h-full object-cover scale-[0.75]"
              />
            </div>
            <div>
              <h3 className="text-3xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
                Swathishree Yanamandra
              </h3>
              <p className="text-sage-600 mb-2 text-lg font-medium">
                CEO of VHW
              </p>
              <p className="text-sage-700 mb-6 leading-relaxed">
                An Advanced Marma Practitioner, Breathwork & Meditation
                Instructor, and Psychotherapist. With extensive training from
                the Art of Living Foundation, she combines Ayurveda, psychology,
                and holistic healing to bring transformational wellness to her
                clients. She has a masters degree in Psychology from Bombay
                University and is a licensed Massage & Bodywork therapist. She
                has undergone training from Sri Sri Tattva and the Art of Living
                Foundation in Ayurveda treatments and basic/advanced Marma
                healing. She is also an instructor with the Art of Living
                Foundation and teaches the SKY breath meditation.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] text-sage-900 mb-12 text-center">
            Our Advisor
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
                Shravan Bharathula
              </h3>
              <p className="text-sage-600 mb-2 text-lg font-medium">
                Art of Living Instructor
              </p>
              <p className="text-sage-700 mb-6 leading-relaxed">
                With 18+ years of experience teaching SKY Breath Meditation,
                Sahaj Samadhi, Sri Sri Yoga, Sleep & Anxiety Protocol and Silent
                Retreats. He discovered SKY during his IIT Bombay days and has
                been practicing for 30 years. Passionate about community
                wellness, he leads meditation , breathwork, yoga and silence
                programs. He has undergone Marma healing training from the Art
                of Living Foundation. Shravan holds a Master of Science from
                Carnegie Mellon University and works in Data Strategy at a New
                York investment bank.
              </p>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden order-1 md:order-2">
              <img
                src="Shravan.png"
                alt="Shravan Bharathula"
                className="w-full h-full object-cover scale-[0.75]"
              />
            </div>
          </div>
        </div>

        {/* Sri Sri Tattva Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="lotus-divider mb-12" />
          <p className="text-xl text-sage-700 mb-8">
            We are proud to be a Sri Sri Tattva Franchise, ensuring that every
            treatment follows the highest standards of Ayurvedic tradition and
            expertise.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-['Cormorant_Garamond'] text-sage-900 mb-8">
            Connect With Us
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl text-sage-700">📍 Location: Edison, NJ</p>
            <p className="text-xl text-sage-700">📞 Contact: 732-476-4754</p>
          </div>
          <Link to="https://calendly.com/vedichealingwellness">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-sage-50 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-600/30">
              Book an Appointment Today <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
