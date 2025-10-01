'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0" style={{ direction: 'ltr', textAlign: 'left' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm a{' '}
                <span className="gradient-text">Web Developer</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Specializing in developing modern web applications using 
                <span className="text-blue-400 font-semibold"> Next.js</span>, 
                <span className="text-cyan-400 font-semibold"> React</span>, and 
                <span className="text-purple-400 font-semibold"> Django.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover-lift"
              >
                View Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className={`flex flex-col items-center ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="relative mb-8">
              {/* Profile image */}
              <div className="w-80 h-80 glass rounded-full flex items-center justify-center border-4 border-white/10 overflow-hidden">
                <Image
                  src="/zafer.jpg"
                  alt="Zafer Profile Picture"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-500/20 rounded-full animate-pulse"></div>
            </div>

            {/* Name Section */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
                MOHAMAD ZAFER MAKKI
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>
              <p className="text-lg text-gray-300 font-light tracking-wider">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator for mobile and tablet - centered below Full Stack Developer */}
        <div className="lg:hidden flex justify-center mt-8 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator - Desktop only */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
