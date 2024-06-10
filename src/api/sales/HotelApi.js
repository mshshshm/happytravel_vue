import apiClient from "../axios";

// GET
export const getHotelList = async () => {
  try {
    const response = await apiClient.get("/sales/hotel-list");
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel list:", error);
    throw error;
  }
};

// GET last hotel code
export const getLastHotelCode = async () => {
  try {
    const response = await apiClient.get("/sales/last-hotel-code");
    return response.data;
  } catch (error) {
    console.error("Error fetching last hotel code:", error);
    throw error;
  }
};

// POST
export const insertHotel = async (hotel, empId) => {
  try {
    const response = await apiClient.post("/sales/hotel", hotel, empId);
    return response.data;
  } catch (error) {
    console.error("Error inserting hotel:", error);
    throw error;
  }
};

// PUT
export const updateHotel = async (hotelCode, hotel, empId) => {
  try {
    const response = await apiClient.put(`/sales/hotel/${hotelCode}`, hotel, empId);
    return response.data;
  } catch (error) {
    console.error('Error updating hotel:', error);
    throw error;
  }
};

// DELETE
export const deleteHotel = async (hotelCode) => {
  try {
    const response = await apiClient.delete(`/sales/hotel/${hotelCode}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting hotel:", error);
    throw error;
  }
};

// GET Country List
export const getCountries = async (params) => {
  try {
    const response = await apiClient.get("sales/countries", { params });
    return response.data;
  } catch (error) {
    console.error("Error getting countries:", error);
    throw error;
  }
};
