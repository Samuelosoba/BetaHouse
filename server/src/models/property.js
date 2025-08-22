// models/property.js
import { Schema, model } from "mongoose";

const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isForRent: {
      type: Boolean,
      default: false,
    },
    isForSale: {
      type: Boolean,
      default: false,
    },
    details: {
      bedrooms: Number,
      bathrooms: Number,
      size: Number, // in square feet
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Property = model("Property", propertySchema);
export default Property;
