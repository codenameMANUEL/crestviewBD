// const mongoose = require("mongoose");

// const ApplicationSchema = mongoose.Schema(
//     {
//         full_name: {
//             type: String,
//             require: [true, "Please enter your name"]
//         },
//         email: {
//             type: String,
//             require: [true, "Please enter a correct email"]
//         },
//         cv: {
//             type: String,
//             require: [true, "Please select a cv"]
//         }
//     },
//     {
//         timeStamps: true
//     }
// );

// const Application = mongoose.model("Application", ApplicationSchema)
// module.exports = Application;

const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema(
    {
        full_name: {
            type: String,
            required: true,  // Changed from 'require' to 'required'
        },
        email: {
            type: String,
            required: true,  // Changed from 'require' to 'required'
        },
        cv: {
            type: String,
            required: true,  // Changed from 'require' to 'required'
        }
    },
    {
        timestamps: true    // Changed from 'timeStamps' to 'timestamps'
    }
);

const Application = mongoose.model("Application", ApplicationSchema);
module.exports = Application;