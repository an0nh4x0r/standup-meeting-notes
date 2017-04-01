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
    impediments: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Standup', standupSchema);
