"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      console.log("Using API URL:", apiUrl); // For debugging
      const response = await fetch(`${apiUrl}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail(""); // Clear the form
      } else {
        setMessage(data.detail || "Something went wrong");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Failed to connect to server");
      setIsSuccess(false);
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen background-image">
      {/* Header */}
      <header className="flex items-center p-6 max-w-7xl">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="OpenSlot.ai Logo"
            width={64}
            height={64}
            className="rounded-lg"
          />
          <span className="text-white font-semibold text-[50px]">OpenSlot.ai</span>
        </div>
        <nav className="hidden ml-60 md:flex items-center space-x-60">
          <a href="#" className="text-white text-[24px]">Product</a>
          <a href="#" className="text-white text-[24px]">Pricing</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3">
              <span className="text-white/90 text-sm font-medium">🚀 Coming Soon - Early Access Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Save your time with<br />
              One-Click AI negotiation.
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg">
              Define what&apos;s movable (1:1, focus, habits) - AI safely negotiates shifts, 
              collects approvals, and books automatically with just one click.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 text-lg bg-transparent border-0 border-b-2 border-white text-white placeholder:text-white/60 focus:border-white focus:outline-none disabled:opacity-50"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isLoading || !email}
                  className="px-8 py-3 bg-black/60 text-lg text-white rounded-lg hover:bg-black/80 transition-colors whitespace-nowrap disabled:cursor-not-allowed"
                >
                  {isLoading ? "Joining..." : "Join now"}
                </button>
              </div>
              {message && (
                <div className={`mt-4 text-sm ${isSuccess ? 'text-green-300' : 'text-red-300'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
          
          {/* Calendar Visualization */}
          <div className="relative">
            <div className="bg-white/23 backdrop-blur-lg rounded-2xl p-6">
              {/* Calendar Grid */}
              <div className="grid grid-cols-5 gap-3 mb-4">
                {/* Top row - outlined blocks */}
                <div className="h-8 border-2 border-orange-300 rounded opacity-60"></div>
                <div className="h-8 border-2 border-orange-300 rounded opacity-60"></div>
                <div className="h-8 border-2 border-orange-300 rounded opacity-60"></div>
                <div className="h-8 border-2 border-orange-300 rounded opacity-60"></div>
                <div className="h-8 border-2 border-orange-300 rounded opacity-60"></div>
                
                {/* Second row */}
                <div className="h-12 bg-purple-200 rounded opacity-80"></div>
                <div className="h-16 bg-blue-300 rounded opacity-80"></div>
                <div className="h-12 bg-blue-200 rounded opacity-80"></div>
                <div className="h-14 bg-blue-300 rounded opacity-80"></div>
                <div className="h-10 bg-blue-200 rounded opacity-80"></div>
                
                {/* Third row */}
                <div className="h-10 bg-pink-200 rounded opacity-80"></div>
                <div className="h-14 bg-purple-300 rounded opacity-80"></div>
                <div className="h-12 bg-blue-200 rounded opacity-80"></div>
                <div className="h-16 bg-blue-300 rounded opacity-80"></div>
                <div className="h-8 bg-blue-200 rounded opacity-80"></div>
                
                {/* Fourth row */}
                <div className="h-8 bg-pink-200 rounded opacity-80"></div>
                <div className="h-12 bg-purple-200 rounded opacity-80"></div>
                <div className="h-10 bg-pink-300 rounded opacity-80"></div>
                <div className="h-8 bg-blue-200 rounded opacity-80"></div>
                <div className="h-14 bg-blue-300 rounded opacity-80"></div>
                
                {/* Fifth row */}
                <div className="h-12 bg-blue-200 rounded opacity-80"></div>
                <div className="h-8 bg-pink-200 rounded opacity-80"></div>
                <div className="h-14 bg-blue-300 rounded opacity-80"></div>
                <div className="h-10 bg-pink-200 rounded opacity-80"></div>
                <div className="h-12 bg-blue-300 rounded opacity-80"></div>
              </div>
              
              {/* Side Panel */}
              <div className="absolute -right-6 top-6 bg-white rounded-lg shadow-lg p-4 w-52">
                <div className="text-sm font-semibold text-gray-900 mb-4">This week</div>
                <div className="space-y-3">
                  {/* Active items with blue progress bars */}
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  {/* Inactive items with gray progress bars */}
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Manage your entire community<br />
            in a single system
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
            <div className="bg-white/23 backdrop-blur-lg rounded-xl p-8 text-center">
             <div className="w-16 h-16 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl flex items-center justify-center mx-auto mb-6 bg-[#EADDFF] ">
                <Image
                  src="/ai-icon.png"
                  alt="AI Intelligence"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI scans schedules</h3>
            <p className="text-white/80">
              AI reads free/busy and surfaces real overlap without exposing private details
            </p>
          </div>

          {/* Feature 2 */}
            <div className="bg-white/23 backdrop-blur-lg rounded-xl p-8 text-center">
             <div className="w-16 h-16 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl flex items-center justify-center mx-auto mb-6 bg-[#EADDFF] ">
                <Image
                  src="/analytics-icon.png"
                  alt="Analytics Search"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Finds movable events</h3>
            <p className="text-white/80">
              Flags 1:1s, focus blocks, and habits as reschedulable under your policy, work hours, and buffers
            </p>
          </div>

          {/* Feature 3 */}
            <div className="bg-white/23 backdrop-blur-lg rounded-xl p-8 text-center">
             <div className="w-16 h-16 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl flex items-center justify-center mx-auto mb-6 bg-[#EADDFF] ">
                <Image
                  src="/handshake-icon.png"
                  alt="Negotiation Handshake"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Suggest the best plan</h3>
            <p className="text-white/80">
              Proposes two safe shift options, collects one-click approvals, and auto-books with audit and undo
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-center">
          <div className="bg-white/23 backdrop-blur-lg rounded-xl p-8 max-w-md w-full text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Standard</h3>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$5</span>
              <span className="text-white/80 text-lg">/month</span>
            </div>
            <div className="space-y-4 mb-8">
              <div className="text-white/80">Unlimited AI scans</div>
              <div className="text-white/80">Unlimited AI negotiation</div>
              <div className="text-white/80">Unlimited team members</div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 text-lg bg-transparent border-0 border-b-2 border-white text-white placeholder:text-white/60 focus:border-white focus:outline-none disabled:opacity-50"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isLoading || !email}
                  className="px-8 py-3 bg-black/60 text-lg text-white rounded-lg hover:bg-black/80 transition-colors whitespace-nowrap disabled:cursor-not-allowed"
                >
                  {isLoading ? "Joining..." : "Join now"}
                </button>
              </div>
              {message && (
                <div className={`mt-4 text-sm ${isSuccess ? 'text-green-300' : 'text-red-300'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center text-white/60 text-sm">
          © 2025 - All rights reserved.
        </div>
      </footer>
    </div>
  );
}