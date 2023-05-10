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
        const user = new model.User(req.body);
        const result = await user.save();
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};


exports.getAll = async (req, res) => {
    try {
        const user = await model.User.find();
        res.status(200).send({"Message" : "success","data" : user})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await model.User.findById(id);
        if (user){
            res.status(200).send({"Message" : "success","data" : user})            
        } else {
            res.status(404).send({"Message" : "user not found"})            
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
        const user = await model.User.findByIdAndDelete(id);

        if (user){
            res.status(200).send({"Message" : "success","data" : user})            
        } else {
            res.status(404).send({"Message" : "User not found"})            
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
        const user = await model.User.findByIdAndUpdate(id,{...req.body});

        if (user){
            res.status(200).send({"Message" : "success","data" : user})            
        } else {
            res.status(404).send({"Message" : "User not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};




