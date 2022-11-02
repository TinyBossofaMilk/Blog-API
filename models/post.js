const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {type: String},
    text: {type: String},
    comments: [{type: Schema.ObjectId, ref:'Comment'}],
    timestamp: {type: Date},
    published: {type: Boolean}
});

module.exports = mongoose.model('Post', PostSchema)