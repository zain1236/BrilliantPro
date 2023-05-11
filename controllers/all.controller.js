const model = require("../models/index")
const mongoose = require("mongoose")


exports.summary = async (req, res) => {
    try {

        // const bookValidate = await bookSchema.validateAsync(req.body);
        const course = new model.Course.countDocuments();
        console.log(course);
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};
