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
      <div className="bg-gray-900 rounded-sm p-8 md:p-12 relative overflow-hidden">
        {/* Animated dots background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing Team of{' '}
            <span className="text-blue-500 inline-block min-w-[200px]">{typedText}</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We&apos;re always looking for talented individuals to join our team
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Link 
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-sm transition-colors duration-200"
            >
              View Open Positions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-sm transition-colors duration-200"
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
