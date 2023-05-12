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
        const assesment = new model.Assessment(req.body);
        const result = await assesment.save();
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};


exports.getAll = async (req, res) => {
    try {
        const assesment = await model.Assessment.find();
        res.status(200).send({"Message" : "success","data" : assesment})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;
        const assesment = await model.Assessment.findById(id);
        if (assesment){
            res.status(200).send({"Message" : "success","data" : assesment})            
        } else {
            res.status(404).send({"Message" : "Assesment not found"})            
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
        const assesment = await model.Assessment.findByIdAndDelete(id);

        if (assesment){
            res.status(200).send({"Message" : "success","data" : assesment})            
        } else {
            res.status(404).send({"Message" : "assesment not found"})            
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
        const assesment = await model.Assessment.findByIdAndUpdate(id,{...req.body});

        if (assesment){
            res.status(200).send({"Message" : "success","data" : assesment})            
        } else {
            res.status(404).send({"Message" : "Assesment not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};







