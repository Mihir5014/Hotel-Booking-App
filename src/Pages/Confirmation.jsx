import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  setBookingRestored,
  setCity,
  setHotel,
  setRoom,
  setGuestInfo,
} from '../features/booking/bookingSlice';

const Confirmation = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  const {
    city,
    hotel,
    room,
    guestInfo,
    bookingRestored,
  } = booking;

  const [, setStoredBooking] = useLocalStorage('bookingState', {});

  //  Restore from localStorage if needed
  useEffect(() => {
    if (!bookingRestored) {
      const savedBooking = JSON.parse(localStorage.getItem('bookingState'));

      if (savedBooking) {
        if (savedBooking.city) dispatch(setCity(savedBooking.city));
        if (savedBooking.hotel) dispatch(setHotel(savedBooking.hotel));
        if (savedBooking.room) dispatch(setRoom(savedBooking.room));
        if (savedBooking.guestInfo) dispatch(setGuestInfo(savedBooking.guestInfo));
      }
      dispatch(setBookingRestored(true));
    }
  }, [dispatch, bookingRestored]);

  // Persist booking data to localStorage
  useEffect(() => {
    if (city || hotel || room || guestInfo) {
      setStoredBooking({ city, hotel, room, guestInfo });
    }
  }, [city, hotel, room, guestInfo, setStoredBooking]);


  // Prevent early render if booking isn't restored yet
  if (!bookingRestored) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        Restoring booking details...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          Booking Confirmed!
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Thank you for booking with us. Below are your booking details.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-white">Guest Info</h3>
            <p className="text-gray-600 dark:text-gray-300">Name: {guestInfo?.fullName || 'N/A'}</p>
            <p className="text-gray-600 dark:text-gray-300">Email: {guestInfo?.email || 'N/A'}</p>
            <p className="text-gray-600 dark:text-gray-300">Phone: {guestInfo?.phone || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 dark:text-white">Hotel Info</h3>
            <p className="text-gray-600 dark:text-gray-300">City: {city || 'N/A'}</p>
            <p className="text-gray-600 dark:text-gray-300">Hotel: {hotel?.name || 'N/A'}</p>
            <p className="text-gray-600 dark:text-gray-300">
              Room: {room ? `${room.type} - ₹${room.price}` : 'N/A'}
            </p>
          </div>

        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
