import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

// ✅ ES Module compatible export
export default ServiceRequest;
