const model = require("../models/index")
const mongoose = require("mongoose")


exports.summary = async (req, res) => {
    try {

        // const bookValidate = await bookSchema.validateAsync(req.body);
        const course = (await model.Material.find()).length;

        console.log(course);
        res.status(200).send({"Message" : "success","data" : course})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};
