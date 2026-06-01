'use client';

import { useEffect, useState } from 'react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const technologies = [
    { name: 'HTML', icon: '🔤' },
    { name: 'CSS', icon: '🎀' },
    { name: 'JavaScript', icon: '✨' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Django', icon: '🌱' },
    { name: 'Python', icon: '🐍' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'C#', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Cursor Editor', icon: '🖱️' },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div
          className={`flex flex-col items-center text-center mb-20 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 gradient-text">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive set of technical skills that I use to create advanced
            and innovative web solutions
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-6 mb-24 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover-lift flex flex-col items-center justify-center w-32 h-32"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <div className="text-center text-base text-gray-300 font-medium">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col items-center ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="glass p-10 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Why These Skills?
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I believe that continuous development and learning is the key to
              success in the world of technology. I invest a lot of time in
              learning the latest technologies and best practices to ensure
              delivering high-quality solutions that meet client needs and exceed
              their expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
