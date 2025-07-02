import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchHotels, setHotel, setCity } from '../features/booking/bookingSlice';
import PersonalDetails from './BookingSteps/PersonDetails';
import RoomSelection from './BookingSteps/RoomSelection';
import PaymentInfo from './BookingSteps/PaymentInfo';

const steps = [
  { label: 'Personal Details', component: PersonalDetails },
  { label: 'Room Selection', component: RoomSelection },
  { label: 'Payment', component: PaymentInfo },
];

const BookingStepper = () => {
  const { hotelId } = useParams();
  const dispatch = useDispatch();
  const { hotelsData, hotel: selectedHotel, loading, error } = useSelector(state => state.booking);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (hotelsData.length === 0 && !loading) {
      dispatch(fetchHotels());
    }
  }, [hotelsData, loading, dispatch]);

  useEffect(() => { 
    const found = hotelsData
      .flatMap(c => c.hotels.map(h => ({ ...h, city: c.city })))
      .find(h => h.id === Number(hotelId));
      

    if (found) {
      dispatch(setHotel(found));
      dispatch(setCity(found.city));
    }
  }, [hotelsData, hotelId, dispatch]);

  const goNext = () => {
    if (step < steps.length - 1) setStep(s => s + 1);
    else navigate('/confirmation');
  };

  if (loading) return <p>Loading hotel...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!selectedHotel) return <p className="text-red-500">Hotel not found</p>;

  const Step = steps[step].component;
  return (
    <div className="mx-auto p-8 bg-white dark:bg-gray-900 ">
      <div className="max-w-2xl mx-auto mb-6 flex justify-around text-sm text-gray-600 dark:text-amber-50">
        {steps.map((s, i) => (
          <div key={i} className={i === step ? 'font-semibold text-blue-600' : 'text-gray-600 dark:text-amber-50'}>
            Step {i+1}: {s.label}
          </div>
        ))}
      </div>
      <Step onNext={goNext} onBack={() => setStep(s => Math.max(s - 1, 0))} />
    </div>
  );
};


export default BookingStepper;
