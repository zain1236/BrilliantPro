const model = require("../models/index")
const mongoose = require("mongoose")


exports.summary = async (req, res) => {
    try {

        // const bookValidate = await bookSchema.validateAsync(req.body);
        const material = (await model.Material.find()).length;
        const course = (await model.Course.find()).length;
        const learner = (await model.User.find({'role' : 'learner'})).length;


        const data = {
            "courses" : course,
            "learners" : learner,
            "materials" : material,
            "certificates" : 0
        }
        console.log(course);
        res.status(200).send({"Message" : "success","data" : data})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};
