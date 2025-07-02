import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHotels as fetchHotelsAPI } from '../../api/hotelsAPI';

// Async thunk to fetch hotels
export const fetchHotels = createAsyncThunk(
  'booking/fetchHotels',
  async (_, thunkAPI) => {
    try {
      const data = await fetchHotelsAPI();
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to load hotel data');
    }
  }
);

const initialState = {
  hotelsData: [],
  city: null,
  hotel: null,
  room: null,
  guestInfo: null,
  bookingRestored: false, // 🔄 used to detect if state is restored from localStorage
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setHotel: (state, action) => {
      state.hotel = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    setGuestInfo: (state, action) => {
      state.guestInfo = action.payload;
    },
    setBookingRestored: (state, action) => {
      state.bookingRestored = action.payload;
    },
    resetBooking: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelsData = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

// Export actions
export const {
  setCity,
  setHotel,
  setRoom,
  setGuestInfo,
  setBookingRestored,
  resetBooking,
} = bookingSlice.actions;

// Export reducer
export default bookingSlice.reducer;
