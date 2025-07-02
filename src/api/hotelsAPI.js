import axios from "axios";

export const fetchHotels = async () => {
  try {
    const response = await axios.get("/data/hotels.json");
    return response.data;
    
  } catch (error) {
    console.log("Failed to fetch : ", error.message);
    throw error;
  }
};

