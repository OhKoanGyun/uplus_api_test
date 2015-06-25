'use strict';

var _ = require('lodash');
var request = require('request');
var config = require('../../config/environment');
var env = require('../../config/local.env');
var apiKey = env.DEVICE_API_KEY;

exports.realtime = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/1.1/devices/' + req.query.deviceId + '/realtimeInfo',
    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'token': req.query.token
      },
      json: true,
      agentOptions: {
        rejectUnauthorized: false
      }
    };

  request(options, function (err, response, body) {

    var statusCode = (response && response.statusCode) || 400,
      result = err || body;

    res.send({
      statusCode: statusCode,
      result: result
    });

  });

};

exports.hourlyUsage = function (req, res) {

  var domain = req.query.host || config.domain,

    endpoint = domain + '/1.1/devices/' + req.query.deviceId + '/hourly/usages',

    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'token': req.query.token
      },
      json: true,
      qs: {
        start: req.query.start,
        end: req.query.end
      },
      agentOptions: {
        rejectUnauthorized: false
      }
    };

  request(options, function (err, response, body) {

    var statusCode = (response && response.statusCode) || 400,
      result = err || body;

    res.send({
      statusCode: statusCode,
      result: result
    });

  });

};

exports.dailyUsage = function (req, res) {

  var domain = req.query.host || config.domain,

    endpoint = domain + '/1.1/devices/' + req.query.deviceId + '/daily/usages',

    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'token': req.query.token
      },
      json: true,
      qs: {
        start: req.query.start,
        end: req.query.end
      },
      agentOptions: {
        rejectUnauthorized: false
      }
    };

  request(options, function (err, response, body) {

    var statusCode = (response && response.statusCode) || 400,
      result = err || body;

    res.send({
      statusCode: statusCode,
      result: result
    });

  });

};

exports.setEventPush = function (req, res) {
  var domain = req.query.host || config.domain,

    endpoint = domain + '/1.2/devices/' + req.query.deviceId + '/events/push',

    options = {
      method: 'PUT',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'token': req.query.token
      },
      body: {
        status: req.query.status
      },
      json: true,
      agentOptions: {
        rejectUnauthorized: false
      }
    };

  request(options, function (err, response, body) {

    var statusCode = (response && response.statusCode) || 400,
      result = err || body;

    res.send({
      statusCode: statusCode,
      result: result
    });

  });

};

exports.getEventPush = function (req, res) {

  var domain = req.query.host || config.domain,

    endpoint = domain + '/1.2/devices/' + req.query.deviceId + '/events/push',
    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'token': req.query.token
      },
      json: true,
      agentOptions: {
        rejectUnauthorized: false
      }
    };

  request(options, function (err, response, body) {

    var statusCode = (response && response.statusCode) || 400,
      result = err || body;

    res.send({
      statusCode: statusCode,
      result: result
    });

  });

};
