'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/0efc993ee4b8bc6e4e33939b16f3a514/6ce88bdb855be79e41b7a18b2e76c146.jfif" 
                alt="Notus Technologies Logo" 
                className="h-10 w-auto"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/get-quote"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Get Quote
            </Link>
          </div>
          
          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="/blog" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link 
                href="/get-quote"
                className="block w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}