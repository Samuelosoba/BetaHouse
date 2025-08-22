import Property from "../models/property.js";
import createHttpError from "http-errors";

// CREATE a new property

// CREATE a new property
export const createProperty = async (req, res, next) => {
  try {
    const {
      title,
      location,
      price,
      rating,
      bedrooms,
      bathrooms,
      size,
      isFeatured,
      isForSale,
      isForRent,
    } = req.body;
    const image = req.file ? req.file.filename : null;

    // Validate all required fields
    if (
      !title ||
      !location ||
      !price ||
      !rating ||
      !bedrooms ||
      !bathrooms ||
      !size ||
      !image
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProperty = await Property.create({
      title,
      location,
      price,
      rating,
      image,
      isFeatured,
      isForSale,
      isForRent,
      details: {
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        size: Number(size),
      },
    });

    res.status(201).json({
      message: "Property created successfully",
      property: newProperty,
    });
  } catch (error) {
    next(error);
  }
};

// GET all properties
export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

// GET popular properties (only those with 5-star rating)
export const getPopularProperties = async (req, res, next) => {
  try {
    const popularProperties = await Property.find({ rating: 5 }).sort({
      createdAt: -1,
    });
    res.status(200).json(popularProperties);
  } catch (error) {
    next(error);
  }
};
// SEARCH properties
export const searchProperties = async (req, res) => {
  try {
    const { title, location, bedrooms } = req.query;

    const filter = {};

    if (title) filter.title = { $regex: title, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i" };
    if (bedrooms && bedrooms !== "0")
      filter["details.bedrooms"] = Number(bedrooms);

    const properties = await Property.find(filter);

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error });
  }
};

