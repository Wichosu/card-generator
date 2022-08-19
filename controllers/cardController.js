var Cards = require('../models/cards');

var async = require('async');

exports.index_get = (req, res) => {
  async.parallel(
    {
      cards(callback) {
        Cards.find(callback);
      },
    },
    (err, results) => {
      res.render('index', {
        title: 'Testing',
      });
    });
};