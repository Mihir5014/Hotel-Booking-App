import React from 'react'

export default function Offers() {
  return (
   <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Exclusive Offers</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Offer 1 */}
          <div className="relative w-72 h-80 rounded-xl overflow-hidden shadow-lg group transform transition hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Summer Special"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Summer Special</h3>
              <p className="text-sm">Flat 30% off on beach resorts</p>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="relative w-72 h-80 rounded-xl overflow-hidden shadow-lg group transform transition hover:scale-105">
            <img
              src="https://www.indianluxurytrains.com/wp-content/uploads/2015/01/The-Oberoi-Udaivilas-Udaipur-1.jpg"
              alt="Luxury Stays"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Luxury Stays</h3>
              <p className="text-sm">Free breakfast with all 5-star bookings</p>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="relative w-72 h-80 rounded-xl overflow-hidden shadow-lg group transform transition hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Weekend Getaway"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Weekend Getaway</h3>
              <p className="text-sm">2 nights for the price of 1</p>
            </div>
          </div>
        </div>
      </section>
  )
}
