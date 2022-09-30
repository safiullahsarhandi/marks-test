const User = require("../models/User");

exports.index = async (req,res)=> {
    try {
        let users = await User.find();
        res.send({message : 'users data',data : users, status : true});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message, status : false});
    }
};


exports.create = async (req,res)=> {
    try {
        let users = await User.create({
            ...req.body,
        });
        res.send({message : 'users created successfully', status : true});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message, status : false});
    }
};

exports.update = async (req,res)=> {
    try {
        let users = await User.updateOne({
            _id : req.params.id,
        },{
            ...req.body,
        });
        res.send({message : 'users updated successfully', status : true});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message, status : false});
    }
};



exports.delete = async (req,res)=> {
    console.log(req.body);
    try {
        await User.deleteMany({
            _id : req.body.ids
        });
        res.send({message : 'deleted successfully', status : true});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message, status : false});
    }
};