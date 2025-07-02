import React from 'react';

const PaymentInfo = ({ onNext, onBack }) => {
  const handleMockPayment = () => {
    onNext();
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-md shadow-md transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>

      <p className="mb-6 text-center max-w-md text-gray-600 dark:text-gray-300">
        This is a mock step — no real payment processing is done. Click below to complete your booking.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleMockPayment}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200"
        >
          Complete Booking
        </button>

        <button
          onClick={onBack}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm self-center"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
