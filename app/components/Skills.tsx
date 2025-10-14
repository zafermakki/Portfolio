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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 100, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', level: 97, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-cyan-600' },
        { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', level: 82, color: 'from-gray-400 to-gray-600' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Django', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'MySQL', level: 92, color: 'from-blue-400 to-blue-600' },
        { name: 'C#', level: 20, color: 'from-purple-400 to-purple-600' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Postman', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'Cursor Editor', level: 98, color: 'from-pink-400 to-pink-600' },
      ],
    },
  ];

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
        {/* Section Header */}
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

        {/* Technology Icons */}
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass p-8 rounded-xl hover-lift flex flex-col ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-lg">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${
                            categoryIndex * 0.2 + skillIndex * 0.1
                          }s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
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
