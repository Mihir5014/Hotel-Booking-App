import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchHotels } from '../../features/booking/bookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCity as setCityAction } from '../../features/booking/bookingSlice';

export default function Hero() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cityList, setCityList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { hotelsData } = useSelector(state => state.booking);

  useEffect(() => {
    if (Array.isArray(hotelsData) && hotelsData.length === 0) {
      dispatch(fetchHotels());
    }
  }, [dispatch, hotelsData]);

  useEffect(() => {
    if (Array.isArray(hotelsData) && hotelsData.length > 0) {
      const uniqueCities = [...new Set(hotelsData.map(h => h.city))];
      setCityList(uniqueCities);
    }
  }, [hotelsData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.trim()) {
      const filtered = cityList.filter(c => 
        c.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
      
    } else {
      setSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    dispatch(setCityAction(suggestion));
    navigate(`/search/${suggestion.toLowerCase()}`);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(setCityAction(city));
      navigate(`/search/${city.trim().toLowerCase()}`);
    }
  };
  return (
    <section
      className="bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p className="mb-6 text-lg">
          Search top-rated hotels in your dream destination
        </p>
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter city (e.g., Ahmedabad)"
              value={city}
              onChange={handleInputChange}
              required
              className="px-4 py-2 rounded w-64 text-white"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded shadow mt-1 max-h-40 overflow-auto">
                {suggestions.map((sug, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSuggestionClick(sug)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {sug}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
