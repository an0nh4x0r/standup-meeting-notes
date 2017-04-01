var Standup = require('../models/standup.model');

module.exports.create = function (req, res) {

    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediments: req.body.impediments
    });

    entry.save();

    // redirect to home page
    res.redirect(301, '/');

};

module.exports.getNote = function (req, res) {
    res.render('newnote', { title: 'Standup - New Note' });
};i