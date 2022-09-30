const {Schema,Types,model} = require('mongoose');


const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    marks : {
        type : Number,
        required : true,
    },
    feePaid : {
        type : Boolean,
        default : true,
    }
});

module.exports = model('User',userSchema);