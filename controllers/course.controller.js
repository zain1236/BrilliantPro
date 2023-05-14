const model = require("../models/index")
const mongoose = require("mongoose")


exports.create = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        // const bookValidate = await bookSchema.validateAsync(req.body);
        const course = new model.Course(req.body);
        const result = await course.save();
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};


exports.getAll = async (req, res) => {
    try {
        const course = await model.Course.find();
        res.status(200).send({"Message" : "success","data" : course})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;

        // const a =await model.Course.findById(id).populate('assesments.assesmentId')
        // console.log(a);


        const course = await model.Course.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $lookup: {
                  from: "materials",
                  localField: "materials.materialId",
                  foreignField: "_id",
                  as: "materials"
                }
            },
            {
                $lookup: {
                  from: "assesments",
                  localField: "assesments.assesmentId",
                  foreignField: "_id",
                  as: "assesments"
                }
            }
            
        ])

        // const course = await model.Course.findById(id);
        
        if (course){
            res.status(200).send({"Message" : "success","data" : course})            
        } else {
            res.status(404).send({"Message" : "Course not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.addMaterial = async (req, res) => {
    try {
        const {id} = req.params;

        const course = await model.Course.findByIdAndUpdate(
            id,
            { $push: { materials: { materialId: req.body.materialId } } },
            { new: true }
          );

        // const course = await model.Course.findById(id);
        
        if (course){
            res.status(200).send({"Message" : "success","data" : course})            
        } else {
            res.status(404).send({"Message" : "Course not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.remMaterial = async (req, res) => {
    try {
        const {id} = req.params;

        const course = await model.Course.findByIdAndUpdate(
            id,
            { $pull: { materials: { materialId: req.body.materialId } } },
            { new: true }
          );

        // const course = await model.Course.findById(id);
        
        if (course){
            res.status(200).send({"Message" : "success","data" : course})            
        } else {
            res.status(404).send({"Message" : "Course not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};


exports.delete = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await model.Course.findByIdAndDelete(id);

        if (course){
            res.status(200).send({"Message" : "success","data" : course})            
        } else {
            res.status(404).send({"Message" : "Course not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.update = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await model.Course.findByIdAndUpdate(id,{...req.body});

        if (course){
            res.status(200).send({"Message" : "success","data" : course})            
        } else {
            res.status(404).send({"Message" : "Course not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};




