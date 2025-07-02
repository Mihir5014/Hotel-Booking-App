import { useSelector, useDispatch } from 'react-redux';
import { setRoom } from '../../features/booking/bookingSlice';

const RoomSelection = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.booking.hotel);

  const handleSelectRoom = (room) => {
    dispatch(setRoom(room));
    onNext();
  };

  if (!hotel) return <p className="text-gray-700 dark:text-gray-200">No hotel selected.</p>;

  return (
    <div className="min-h-[70vh] max-w-2xl m-auto dark:bg-gray-900 dark:text-white p-4 rounded-md shadow-md transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6">Select a Room</h2>

      <div className="space-y-6">
        {hotel.rooms.map((room) => (
          <div
            key={room.type}
            className="flex justify-between items-center p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <div>
              <p className="font-medium text-lg capitalize text-gray-800 dark:text-gray-200">
                {room.type} Room
              </p>
              <p className="text-gray-600 dark:text-gray-400">Price: ₹{room.price}</p>
            </div>
            <button
              onClick={() => handleSelectRoom(room)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Select
            </button>
          </div>
        ))}

        <div className="pt-4">
          <button
            onClick={onBack}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
