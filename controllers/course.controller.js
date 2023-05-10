const model = require("../models/index")



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
        const course = await model.Course.findById(id);
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

        if (material){
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




