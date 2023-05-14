const model = require("../models/index")
const mongoose = require("mongoose")



exports.create = async (req, res) => {
    try {
        console.log("dsfd");
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        // const bookValidate = await bookSchema.validateAsync(req.body);
        const enroll = new model.Enroll(req.body);
        const result = await enroll.save();
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log( error.message);
        res.status(401).send({ "Message": error.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;
        // const leaners = await model.Enroll.find({"courseId":id}).populate();
        
        const leaners = await model.Enroll.find({"courseId" : id}).populate('learnerId')

        if (leaners){
            res.status(200).send({"Message" : "success","data" : leaners})            
        } else {
            res.status(404).send({"Message" : "leaners not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};