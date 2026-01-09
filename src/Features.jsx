import {
  MapPin,
  Star,
  ArrowRight,
  Navigation
} from 'lucide-react';

const Destination = () => {
  return (
    <div id="feature" className="min-h-screen font-sans text-slate-800 bg-gray-700">
        <section className="py-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-orange-400 mb-4">Our Features</h2>
            <p className="text-slate-300">Discover the most loved features among our users</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Manali [cite: 20, 21] */}
            <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="images\tracking. _ Premium Vector"
                  alt="Manali"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-200">Real-Time Tracking</h3>
                  
                </div>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <p>Track your vehicles with 95% increased efficiency through our cutting-edge GPS technology, ensuring instant and precise location updates</p>
                </div>
                
              </div>
            </div>

            {/* Card 2: Sikkim [cite: 22, 23] */}
            <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="images\Concepto de aplicación de taxi con ilustraciones _ Vector Premium.jpeg"
                  alt="Sikkim"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
               
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-200">Vehicle Status Alerts</h3>
                  
                </div>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <p>Receive timely notifications about your vehicle's status, enhancing your awareness and providing crucial updates with a 98% improvement in responsiveness</p>
                </div>
                
              </div>
            </div>

             {/* Card 3: Featured Expert Card [cite: 30, 31, 33] */}
             <div id="a" className="group bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="images\custom. We offer advanced features like multiple shipping options, flexible payment met___"
                  alt="Expert Trek"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-200"> Customizable Solutions</h3>
                  
                </div>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <p>Enjoy services tailored to your unique needs, offering a 90% increase in flexibility for a personalized and efficient tracking experience</p>
                </div>
                
              </div>
            </div>
          </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {/* Card 1: Manali [cite: 20, 21] */}
            <div className="group  bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="images\immob-01.png"
                  alt="Manali"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-200"> Remote Vehicle Immobilization</h3>
                  
                </div>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <p>Take Charge Remotely – Our Advanced Feature Allows You To Immobilize Your Vehicle With A Click For Enhanced Security</p>
                </div>
                
              </div>
            </div>

            {/* Card 2: Sikkim [cite: 22, 23] */}
            <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="images/geofence.jpeg"
                  alt="Sikkim"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
               
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-200"> Geo-Fence Entry And Exit Alerts</h3>
                 
                </div>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <p>Set Virtual Boundaries And Receive Immediate Alerts, Ensuring You're Alerted When Your Vehicle Enters Or Exits Designated Areas</p>
                </div>
                
              </div>
            </div>

             
          </div>


          
        </div>
      </section>

    </div>
  )
}

export default Destination