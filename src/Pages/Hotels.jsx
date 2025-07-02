import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../features/booking/bookingSlice";
import { Link } from "react-router-dom";

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotelsData, loading, error } = useSelector((state) => state.booking);
  const [allHotels, setAllHotels] = useState([]);

  useEffect(() => {
    if (hotelsData.length === 0) {
      dispatch(fetchHotels());
    }
  }, [dispatch, hotelsData]);

  useEffect(() => {
    // Flatten hotels only when data is available
    if (hotelsData.length > 0) {
      const flattened = hotelsData.flatMap((city) => city.hotels);
      setAllHotels(flattened);
    }
  }, [hotelsData]);

  if (loading) return <p className="text-center">Loading hotels...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Explore Hotels
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {allHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={hotel.img}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 ">
                {hotel.name}
              </h3>
              <div className="my-4 space-y-1">
                {hotel.rooms.map((room, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-sm text-gray-700 "
                  >
                    <span>
                      {room.type.charAt(0).toUpperCase() + room.type.slice(1)} Room
                    </span>
                    <span>₹{room.price}</span>
                  </div>
                ))}
              </div>

              <Link
                to={`/booking/${hotel.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
