import axiosInstance from "../hooks/axiosInstance";

// POST: Create a property
export const createProperty = async (formData) => {
  return await axiosInstance.post("/properties", formData);
};

// GET: Get all properties
export const getAllProperties = async () => {
  return await axiosInstance.get("/properties");
};

// GET: Get popular properties
export const getPopularProperties = async () => {
  return await axiosInstance.get("/properties/popular");
};
