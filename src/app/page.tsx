import Image from "next/image";

export default function Home() {
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
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Save your time with<br />
              One-Click AI negotiation.
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg">
              Define what's movable (1:1, focus, habits) - AI safely negotiates shifts, 
              collects approvals, and books automatically with just one click.
            </p>
            <div className="flex items-end gap-4 max-w-md">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full px-4 text-lg bg-transparent border-0 border-b-2 border-white text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-black/60 text-lg text-white rounded-lg hover:bg-black/80 transition-colors whitespace-nowrap">
                Join now
              </button>
            </div>
          </div>
          
          {/* Calendar Visualization */}
          <div className="relative">
            <div className="bg-white/23 backdrop-blur-lg rounded-2xl p-6 space-y-4">
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Header */}
                <div className="col-span-7 text-white/80 text-sm font-medium mb-2">
                  This week
                </div>
                
                {/* Week blocks */}
                {[...Array(5)].map((_, weekIndex) => (
                  <div key={weekIndex} className="col-span-7 grid grid-cols-7 gap-2 mb-2">
                    {[...Array(7)].map((_, dayIndex) => {
                      const colors = [
                        'bg-blue-400', 'bg-purple-400', 'bg-pink-400', 
                        'bg-orange-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400'
                      ];
                      const heights = ['h-8', 'h-12', 'h-6', 'h-10', 'h-14', 'h-4', 'h-9'];
                      return (
                        <div
                          key={dayIndex}
                          className={`${colors[dayIndex % colors.length]} ${heights[dayIndex % heights.length]} rounded opacity-80`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              
              {/* Side Panel */}
              <div className="absolute -right-4 top-4 bg-white rounded-lg shadow-lg p-4 w-48">
                <div className="text-sm font-medium text-gray-900 mb-3">This week</div>
                <div className="space-y-2">
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${index < 3 ? 'bg-blue-400' : 'bg-gray-300'}`} />
                      <div className={`h-2 rounded ${index < 3 ? 'bg-blue-200' : 'bg-gray-200'} flex-1`} />
                    </div>
                  ))}
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
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full px-4 text-lg bg-transparent border-0 border-b-2 border-white text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-black/60 text-lg text-white rounded-lg hover:bg-black/80 transition-colors whitespace-nowrap">
                Join now
              </button>
            </div>
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