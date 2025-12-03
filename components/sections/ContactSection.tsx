import React from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';

const ContactSection: React.FC = () => {
  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect."
      subtitle="Have questions or want to collaborate? We'd love to hear from you."
      className="bg-slate-800/50"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <AnimatedWrapper>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </AnimatedWrapper>
              <AnimatedWrapper delay={150}>
                <input type="email" placeholder="Your Email" className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </AnimatedWrapper>
            </div>
            <div className="mb-6">
              <AnimatedWrapper delay={300}>
                <textarea placeholder="Your Message" rows={5} className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
              </AnimatedWrapper>
            </div>
            <div className="text-center">
              <AnimatedWrapper delay={450}>
                <button type="submit" className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-500 transition-colors duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </AnimatedWrapper>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;