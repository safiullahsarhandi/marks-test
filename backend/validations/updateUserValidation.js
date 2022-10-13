const Validator = require('validatorjs');
module.exports = (req,res,next)=>{
        const validation = new Validator(req.body,{
            name : 'required',
            marks : 'required|numeric',
            feePaid : 'required|boolean',
        });    
        if(validation.fails()){
            res.status(422).send({message : 'Validation Errors',status : false,errors : validation.errors.all()});
        }
        next();
};