import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen font-sans text-slate-800 bg-gray-800">
        {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
           
           

            {/* Hero Images & Floating Cards */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img
                  src="images\113138-OOI45V-391.jpg"
                  alt="Snowy Mountains"
                  className="w-full h-full object-cover"
                />
               
                {/* Floating Widget: Trekking Live [cite: 12, 13] */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg w-48 animate-bounce-slow">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-bold text-slate-500 uppercase">Tracking Live</span>
                     <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-2xl font-bold text-slate-800">2.5km</div>
                  <div className="text-xs text-slate-500">Distance Covered</div>
                </div>

                {/* Floating Widget: Current Expedition [cite: 9] */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Current Speed</div>
                    <div className="font-bold text-slate-900 text-lg">65 km/h</div>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold">+12</div>
                  </div>
                </div>
              </div>
            </div>
             {/* Text Content [cite: 4, 5] */}
            <div className="space-y-6">
              
              <h1 className="text-6xl lg:text-6xl font-bold text-orange-400 leading-[1.1]">
                About Us<br />
              </h1>
              <p className="text-lg text-slate-300 max-w-lg">
                Welcome to Orbitracker, your trusted partner in GPS solutions. At Orbitracker, we specialize in providing cutting
edge vehicle location tracking services. Based in Calicut, Kerala, India, we take pride in delivering advanced
 tracking solutions coupled with unparalleled customer service. Our mission is to offer top-notch GPS technology,
 ensuring the safety and security of your vehicles. With a commitment to quality, we strive to exceed your
 expectations, making navigation and tracking simpler than ever. Explore Orbitracker for an innovative approach to
 vehicle tracking, backed by a history of reliability and customer satisfaction. Your journey is our priority – track 'n
 trace simply with Orbitracker
              </p>
             
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About