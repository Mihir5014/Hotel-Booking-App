import { useParams, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../features/booking/bookingSlice';

const CityHotels = () => {
  const { city } = useParams();
  const [hotels, setHotels] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { hotelsData, loading, error } = useSelector(state => state.booking);

  // console.log(searchParams);

  const bedType = searchParams.get("bedType");

  useEffect(() => {
    if (hotelsData.length === 0) {
      dispatch(fetchHotels());
    }
  }, [dispatch, hotelsData]);

  // filtering hotels based on city, bedType, and guests
  useEffect(() => {
    if (hotelsData.length > 0) {
      const cityData = hotelsData.find(
        (c) => c.city.toLowerCase() === city.toLowerCase()
      );

      if (!cityData) {
        setHotels([]);
        return;
      }

      let filteredHotels = cityData?.hotels || [];

      if (bedType) {
        filteredHotels = filteredHotels
          .map((hotel) => {
            const filteredRooms = hotel.rooms.filter((room) => {
              const matchesType = bedType
                ? bedType.includes(room.type.toLowerCase())
                : true;
              
              return matchesType;
            });

            return filteredRooms.length > 0
              ? { ...hotel, rooms: filteredRooms }
              : null;
          })
          .filter(Boolean);
      }
      setHotels(filteredHotels);
    }
  }, [city, hotelsData, bedType]);

  if (loading) return <p className="text-center">Loading hotels...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;



  return (
    <div className="py-12 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Hotels in {city}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Array.isArray(hotels) && hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={hotel.img}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-xl font-semibold">{hotel.name}</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 my-2">
                  {hotel.rooms.map((room) => (
                    <li key={room.type}>
                      {room.type.toUpperCase()} - ₹{room.price}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking/${hotel.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 my-3 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Book Now
                </Link>
              </div>

            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">
            No hotels found in {city}.
          </p>
        )}
      </div>
    </div>
  );
};

export default CityHotels;
