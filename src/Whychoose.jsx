import {
  Target,
  Headset,
  Cpu,
  Laptop,
} from 'lucide-react';

const Whychoose = () => {
  return (
    <div id="whychoose" className="min-h-screen font-sans text-slate-800 bg-gray-800">
        <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-6">Why Choose Us</h2>
              <p className="text-lg text-slate-300 mb-10">
                Choose Orbitracker for cutting-edge GPS solutions, providing real-time tracking, unmatched reliability, 24/7
                support, user-friendly interfaces, and customizable options. Elevate your journey with confidence and precision
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Feature 1 [cite: 36, 37] */}
                <div className="space-y-3">
                  <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600">
                    <Cpu size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-orange-400"> Advanced Technology</h3>
                  <p className="text-slate-300 text-sm">Utilize Cutting-Edge GPS Tracking For Real-Time Insights Into Your Vehicle's Location</p>
                </div>

                {/* Feature 2 [cite: 42, 43] */}
                <div className="space-y-3">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600">
                    <Target size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-orange-400"> Reliability & Precision</h3>
                  <p className="text-slate-300 text-sm"> Count On Us For Accurate And Reliable Tracking, Ensuring You're Always In Control</p>
                </div>

                {/* Feature 3 [cite: 44, 45] */}
                <div className="space-y-3">
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600">
                    <Headset size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-orange-400"> 24/7 Customer Support</h3>
                  <p className="text-slate-300 text-sm"> Our Dedicated Support Team Is Ready To Assist You Around The Clock, Providing Peace Of Mind</p>
                </div>

                {/* Feature 4 [cite: 46, 47] */}
                <div className="space-y-3">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600">
                    <Laptop size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-orange-400"> User-Friendly Interface</h3>
                  <p className="text-slate-300 text-sm"> Experience Hassle-Free Navigation Through Our Intuitive App And Web Platform</p>
                </div>

                
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img src="images\GPS Vehicle Tracker.jpeg" className="rounded-2xl mt-12 w-full h-64 object-cover" alt="Hiking" />
              <img src="images\download.jpeg" className="rounded-2xl w-full h-64 object-cover" alt="Camping" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Whychoose