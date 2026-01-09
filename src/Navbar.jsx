import  { useState } from 'react';
import {
  Menu,
  X,
  
} from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);

    async function redirectToWhatsapp() {
        const phonenumber = "919645994556"; // include country code, no '+' or spaces
        const message = encodeURIComponent("Hi, I need help");
        const url = `https://wa.me/${phonenumber}?text=${message}`;
        window.location.href = url;
      }
  return (
    <div >
        <nav className="fixed w-full z-50 bg-gray-800/60 backdrop-blur-md border-b border-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              
                <img src="images\logo-no-bg-orange.png" alt="ko" className='size-16'/>
              
              <span className="text-2xl font-bold text-orange-400 tracking-tight">Orbitracker</span>
            </div>
           
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              
              <a href="#about" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline mr-10">About Us</a>
              <a href="#feature" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline">Features</a>

              {/* Download with dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDownloadOpen(true)}
                onMouseLeave={() => setIsDownloadOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsDownloadOpen((s) => !s)}
                  className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline flex items-center gap-1"
                  aria-expanded={isDownloadOpen}
                >
                  Download
                </button>

                {isDownloadOpen && (
                  <div className="absolute right-0  w-44 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.tbtrack.gps"
                      className="block px-4 py-2 text-sm text-orange-400 hover:bg-gray-700 hover:text-white"
                    >
                      Android
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/tb-track-vehicle-tracking/id1249657981" /* replace with real App Store link */
                      className="block px-4 py-2 text-sm text-orange-400 hover:bg-gray-700 hover:text-white"
                    >
                      iOS
                    </a>
                  </div>
                )}
              </div>

              <a href="#footer" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline">Contact Us</a>
                <a
                onClick={(e)=>{e.preventDefault(); redirectToWhatsapp();}}
                role="button"
                tabIndex={0}
                onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); redirectToWhatsapp(); } }}
                className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-600/20 cursor-pointer"
                type='button'
              >
                 Whatsapp
              </a>
              
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => { setIsMenuOpen(!isMenuOpen); if (!isMenuOpen) setIsDownloadOpen(false); }} className="text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700/90 border-t p-4 space-y-4">
            <a href="#about" className="block text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline">About Us</a>
            <a href="#feature" className="block text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline">Features</a>
            <a href="#footer" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline">Contact Us</a>
            {/* Mobile download toggle */}
            <div>
              <button
                onClick={() => setIsDownloadOpen((s) => !s)}
                className="w-full text-left block text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline flex items-center justify-between px-2 py-2"
                type="button"
              >
                Download
                <span className="ml-2">{isDownloadOpen ? '▴' : '▾'}</span>
              </button>
              {isDownloadOpen && (
                <div className="mt-1 pl-4 flex flex-col gap-1">
                  <a href="https://play.google.com/store/apps/details?id=com.tbtrack.gps" className="block text-orange-300 hover:text-white">Android</a>
                  <a href="https://apps.apple.com/" className="block text-orange-300 hover:text-white">iOS</a>
                </div>
              )}
            </div>
            <a
              onClick={(e)=>{e.preventDefault(); redirectToWhatsapp();}}
              role="button"
              tabIndex={0}
              onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); redirectToWhatsapp(); } }}
              className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-600/20 cursor-pointer"
              type='button'
            >
              Whatsapp
            </a>

          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar