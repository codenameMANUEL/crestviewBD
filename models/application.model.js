const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema(
    {
        full_name: {
            type: String,
            required: true,  
        },
        email: {
            type: String,
            required: true,  
        },
        cv: {
            type: String,
            required: true,  
        }
    },
    {
        timestamps: true
    }
);

const EnquirySchema = mongoose.Schema(
    {
        full_name: {
            type: String,
            required: true,  
        },
        email: {
            type: String,
            required: true,  
        },
        message: {
            type: String,
            required: true,  
        }
    },
    {
        timestamps: true
    }
);


const Application = mongoose.model("Application", ApplicationSchema);
const Enquiry = mongoose.model("Enquiry", EnquirySchema);
module.exports = {Application, Enquiry};