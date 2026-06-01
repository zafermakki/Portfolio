'use client';

import { useEffect, useState } from 'react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const achievements = [
    {
      title: 'Full-Stack Development',
      description:
        'Experience in building scalable apps using React, Next.js, Django, and MySQL.',
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Professional Training',
      description:
        'Worked with a tech company during an internship and earned a certificate.',
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
    },
    {
      title: 'Continuous Learning',
      description:
        'Always improving skills and staying updated with modern technologies.',
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-transparent to-gray-900/50"
      style={{ direction: 'ltr', textAlign: 'left' }}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className={`flex flex-col items-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
            About Me
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-300 max-w-3xl mt-2 text-center ${
              isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'
            }`}
          >
            I’m a passionate full-stack web developer who builds modern, fast,
            and scalable applications with a focus on clean code and great user
            experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
          >
            <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
            <p className="text-gray-300 leading-relaxed">
              I specialize in both front-end and back-end development. My stack
              includes{' '}
              <span className="font-semibold">
                HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js,
                Next.js, Django, Python, and MySQL
              </span>
              . With these, I create complete web solutions from scratch.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I’ve worked on numerous personal projects and had the opportunity
              to collaborate with a company during an internship, where I gained
              real-world experience and earned a certificate.
            </p>
          </div>

          {/* Right Content - Achievements */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-1 gap-6 ${
              isVisible ? 'animate-fadeInRight' : 'opacity-0'
            }`}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass p-6 rounded-lg flex items-start space-x-4 hover-lift"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
