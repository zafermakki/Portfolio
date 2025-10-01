'use client';

import { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);


  const contactInfo = [
    {
      title: 'Email',
      value: 'zafermakki@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      value: '+963953645398',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'Syria, Aleppo',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/zafermakki',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zafer-makki-a51571372/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
  id="contact"
  className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4"
>
  <div className="max-w-3xl w-full text-center">
    {/* Section Header */}
    <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        Contact Me
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Have a project in mind? Let's work together to turn your idea into an amazing digital reality
      </p>
    </div>

    {/* Contact Information */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
      <p className="text-gray-400 mb-10">
        I'm available to work on new and exciting projects. Don’t hesitate to contact me
        to discuss your idea or any other inquiries.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                {info.icon}
              </div>
              <h4 className="text-lg font-semibold text-white">{info.title}</h4>
              <p className="text-gray-300 text-sm">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Social Links */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Follow Me On</h4>
      <div className="flex justify-center space-x-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target='blank'
            className="p-3 rounded-full bg-white/5 backdrop-blur-md hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 text-gray-300 hover:text-white transition-all duration-300"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
