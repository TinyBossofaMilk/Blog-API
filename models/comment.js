const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: {type: String},
    text: {type: String},
    timestamp: {type: Date}
});

module.exports = mongoose.model('Comment', CommentSchema);