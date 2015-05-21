'use strict';

var _ = require('lodash');
var request = require('request');
var config = require('../../config/environment');
var env = require('../../config/local.env');

// Get list of things
exports.index = function(req, res) {

  var domain = config.domain,
    endpoint = config.endpoint[req.params.apiName],
    apiKey = env.API_KEY,
    options = {
      method: _.isString(req.query.method) && req.query.method.toUpperCase(),
      url: domain + endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey
      },
      json: true
    };
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  console.log('body: ', req.body);

  if (!options.method) {
    return res.status(400).send({
      message: 'method required'
    });
  } else {

    if (options.method === 'GET') {
      options = _.extend(options, {qs: req.query});
    } else if (options.method === 'POST' || options.method === 'PUT') {
      options = _.extend(options, {body: req.body});
    }

    request(options, function (err, response, body) {

      var statusCode = response.statusCode;

      if (err) {
        res.status(statusCode).send(err);
      } else {
        res.status(statusCode).send(body);
      }

    });
  }

};
