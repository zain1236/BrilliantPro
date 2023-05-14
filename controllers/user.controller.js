const model = require("../models/index")
const jwt = require("jsonwebtoken");


// access config var
function generate_accessTokens(username) {
    const ts = "asdaswfewtgrsdvrf3";
    return jwt.sign(
      {
        ...username,
      },
      ts,
      { expiresIn: "7d" }
    );
}
  
exports.login = async (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }
  
      const email = req.body.email;
      const password = req.body.password;

      const data = await model.User.findOne({ email: email, password: password });

      if (data) {
        const user = {
          _id: data._id,
          name: data.name,
          email: data.email,
          role: data.role,
        };

        // console.log(data);
        const tokengen = generate_accessTokens(user);
        console.log("T:", tokengen);
        res.send({ Message: "Success", Token: tokengen, Role: user.role , name : user.name , userId : user._id});
      }
    } catch (error) {
      console.log("In Catch..");
      res.send({ Status: { Message: error.message } });
    }
};

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

exports.enrolledCourses = async (req, res) => {
    try {
        const {id} = req.params;

        const courses = await model.Enroll.find({"learnerId" : id}).populate('courseId');

        if (courses){
            res.status(200).send({"Message" : "success","data" : courses})            
        } else {
            res.status(404).send({"Message" : "courses not found"})            
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




