// const Application = require("../models/application.model.js")

// const createApplication = async (req, res) => {
//         try {
//             const application = await Application.create(req.body)
//             res.status(200).json(application)
//         } catch (error) {
//             res.status(500).json({message: error.message})
//         }
// }
// const getAllApplications = async (req, res) => {
//     try {
//         const applications = await Application.find({}); // Fetch all applications
//         res.status(200).json(applications);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// module.exports = {
//     createApplication,
//     getAllApplications
// }

const {Application, Enquiry} = require("../models/application.model.js");
const createApplication = async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body cannot be empty" });
    }

    try {
        const application = await Application.create(req.body);
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createEnqiry = async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body cannot be empty" });
    }

    try {
        const enquiry = await Enquiry.create(req.body);
        res.status(200).json(enquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find({});
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllEnquiries = async (req, res) => {
    try {
        const applications = await Enquiry.find({});
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createApplication,
    getAllApplications,
    createEnqiry,
    getAllEnquiries
};
