const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema({

}){timestamps:true})

const Like = mongoose.model('Like',LikeSchema);

module.exports ={Like}