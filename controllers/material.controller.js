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
        const material = new model.Material(req.body);
        const result = await material.save();
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};


exports.getAll = async (req, res) => {
    try {
        const material = await model.Material.find();
        res.status(200).send({"Message" : "success","data" : material})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;
        const material = await model.Material.findById(id);
        if (material){
            res.status(200).send({"Message" : "success","data" : material})            
        } else {
            res.status(404).send({"Message" : "Material not found"})            
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
        const material = await model.Material.findByIdAndDelete(id);

        if (material){
            res.status(200).send({"Message" : "success","data" : material})            
        } else {
            res.status(404).send({"Message" : "Material not found"})            
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
        const material = await model.Material.findByIdAndUpdate(id,{...req.body});

        if (material){
            res.status(200).send({"Message" : "success","data" : material})            
        } else {
            res.status(404).send({"Message" : "Mterial not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};







