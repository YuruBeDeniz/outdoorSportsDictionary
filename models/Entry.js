const {Schema, model} = require('mongoose');

const entrySchema = new Schema(
    {
        author: {type: Schema.Types.ObjectId, ref: 'User'},
        body: String,
        createdAt: { type: Date, default: Date.now }, 
        parentTopic: { type: Schema.Types.ObjectId, ref: 'Topic'}
    }
);

const Entry = model('Entry', entrySchema);

module.exports = Entry;