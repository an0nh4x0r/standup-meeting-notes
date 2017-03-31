var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: {
        type: String
    },
    project: {
        type: String
    },
    workYesterday: {
        type: String
    },
    workToday: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

// Disabled Schema

var noIdSchema = new Schema({
    name: {
        type: String
    }
}, { _id: false });


// Example of using Schema.add

var exampleSchema = new Schema;

exampleSchema.add({
    memberName: {
        type: String
    }
});
