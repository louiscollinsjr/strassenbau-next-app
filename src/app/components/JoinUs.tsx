'use client';

import Link from 'next/link';
import { useTypewriter } from '../hooks/useTypewriter';

const careers = [
  'Engineers',
  'Architects',
  'Project Managers',
  'Site Supervisors',
  'Drone Operators',
  'Safety Officers',
  'Quality Controllers',
  'Bridge Specialists',
  'Road Designers',
  'Photographers',
];

export default function JoinUs() {
  const typedText = useTypewriter(careers, 100, 50, 2000);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="bg-gray-200/30 rounded-sm p-8 md:p-12 relative overflow-hidden">
        {/* Animated dots background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-800/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Join Our Growing Team of{' '}
            <span className="text-red-500 inline-block min-w-[200px] ">{typedText}</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl">
            Be part of something extraordinary. We&apos;re always looking for talented individuals who share our passion for innovation and excellence in construction and engineering.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-blue-600 text-black font-medium rounded-lg transition-colors duration-200 w-full md:w-fit"
            >
              View Open Positions
             

            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white/20 hover:bg-white/10 text-gray-900 font-medium rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Add some fun shapes in the background */}
        <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
          <div className="w-48 h-48 border-4 border-white/10 rounded-full" />
        </div>
        <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
          <div className="w-32 h-32 border-4 border-white/10 rounded-sm rotate-45" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
