import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e5e5e5]">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="container mx-auto px-6 py-40">
          <div className="text-center space-y-8 max-w-2xl mx-auto animate-fadeIn">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-semibold text-white tracking-tight">
                404
              </h1>
              <div className="w-16 h-px bg-[#2a2a2a] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-white font-semibold">
                Page not found
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Sorry, but the page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            <div className="flex justify-center pt-6">
              <Link 
                href="/"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 active:scale-[0.98]"
              >
                <FontAwesomeIcon icon={faHome} className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                <span>Back to home</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
