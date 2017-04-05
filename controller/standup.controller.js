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
    res.render('newnote', { title: 'New Note' });
};

module.exports.list = function (req, res) {
    var query = Standup.find();
    query.sort({ createdOn: 'desc' })
        .limit(12)
        .exec(function (err, results) {
            res.render('index', { title: 'Home', notes: results });
        });
};

module.exports.filterByMember = function (req, res) {
    var query = Standup.find();
    var filter = req.body.memberName;

    query.sort({ createdOn: 'desc' });

    if (filter !== undefined && filter.length > 1) {
        query.where({memberName: filter});
    }

    query.exec(function (err, result) {
        res.render('index', { title: 'Home', notes: result });
    });
};