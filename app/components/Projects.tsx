'use client';

import { useEffect, useState, type ReactNode } from 'react';

const projectIcons: Record<number, ReactNode> = {
  1: (
    <svg
      className="w-10 h-10 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path
        d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61l1.38-7.39H6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  2: (
    <svg
      className="w-10 h-10 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="11" width="18" height="6" rx="2" />
      <path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  ),
  3: (
    <svg
      className="w-10 h-10 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 10.5L12 4l9 6.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="5"
        y="11"
        width="14"
        height="8"
        rx="2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19v-4h6v4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  4: (
    <svg
      className="w-10 h-10 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M10.18 9" />
      <path
        d="M21 16v-2a2 2 0 00-2-2h-7.34l1.13-5.34a1 1 0 00-1.94-.4l-1.5 7A1 1 0 009 15h8a1 1 0 001-1v-1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 21h18" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7 21v-4a2 2 0 012-2h6a2 2 0 012 2v4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  5: (
    <svg
      className="w-10 h-10 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 10.5L12 4l9 6.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="5"
        y="11"
        width="14"
        height="8"
        rx="2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19v-4h6v4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce',
      description:
        'Multi-role full-stack system built with React.js, Django REST + 3 frontends (Admin, Customer, Driver). Code organized into 4 repositories.',
      technologies: ['React.js', 'JavaScript', 'Css', 'MUI', 'Django', 'MySql'],
      githubUrl: 'https://github.com/zafermakki/E-commerce-FullStack/blob/main/README.md',
      featured: true,
    },
    {
      id: 2,
      title: 'Mad_Solution_Project',
      description: 'The project I worked on during my internship at the company.',
      technologies: ['React.js', 'JavaScript', 'Css', 'MUI'],
      githubUrl: 'https://github.com/zafermakki/Mad_Solution_Project',
      featured: false,
    },
    {
      id: 3,
      title: 'Flight_Reservation',
      description: 'Developed a full-stack flight booking system using Next.js and Django.',
      technologies: ['Next.js', 'Typescript', 'Tailwind.css', 'MUI', 'Django', 'MySql'],
      githubUrl: 'https://github.com/zafermakki/Flight_Reservation/blob/main/README.md',
      featured: false,
    },
    {
      id: 4,
      title: 'Employment_Platform',
      description:
        'A digital platform that connects tech engineers with software companies in Syria, offering opportunities for training and employment.',
      technologies: ['Next.js', 'Typescript', 'Tailwind.css', 'MUI', 'Django', 'MySql'],
      githubUrl: 'https://github.com/zafermakki/Employment_Platform',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-transparent to-gray-900/50"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of the best projects I've worked on, showcasing my skills and experience in development
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-xl overflow-hidden hover-lift w-full max-w-sm h-full flex flex-col ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      {projectIcons[project.id] || (
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" strokeWidth={2} />
                        </svg>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">Project Icon</p>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed text-center min-h-[88px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center min-h-[96px] content-start">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass text-gray-300 text-center py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
