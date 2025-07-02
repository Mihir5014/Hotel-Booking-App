export default function Testimonials() {
  return (
    <section
        className="py-20 px-6 bg-cover bg-center text-white dark:bg-gray-900 text-center"
      >
        <div className="bg-gray-500 dark:bg-black bg-opacity-60 py-12 px-4 rounded-lg">
          <h2 className="text-4xl font-bold mb-12">What Our Guests Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              ['Amazing service and beautiful rooms!', "– Priya S."],
              ['Easy to book and great deals.', "– Raj K."],
              ['Will definitely book again!', "– Anjali M."],
            ].map(([quote, name], i) => (
              <div
                key={i}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-80 text-left hover:scale-105 transition-transform duration-300"
              >
                <p className="italic">❝ {quote} ❞</p>
                <span className="block mt-4 font-bold not-italic text-right text-indigo-700">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
