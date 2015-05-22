'use strict';

var _ = require('lodash');
var request = require('request');
var config = require('../../config/environment');
var env = require('../../config/local.env');
var apiKey = 'basic ' + env.ADMIN_API_KEY;

exports.register = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/register',
    options = {
      method: 'POST',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'token': req.query.token
      },
      body: {
        serialNumber: req.query.serialNumber,
        deviceId: req.query.deviceId
      },
      json: true
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

exports.deviceEvent = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/events',
    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'device-id-type': req.query.deviceIdType
      },
      qs: {
        start: req.query.start,
        end: req.query.end,
        offset: req.query.offset,
        limit: req.query.limit
      },
      json: true
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

exports.deviceEvents = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/events',
    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey
      },
      qs: {
        start: req.query.start,
        end: req.query.end,
        offset: req.query.offset,
        limit: req.query.limit
      },
      json: true
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

exports.deviceStatus = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/status',
    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'device-id-type': req.query.deviceIdType
      },
      json: true
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

exports.deviceReset = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/reset',
    options = {
      method: 'PUT',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'device-id-type': req.query.deviceIdType
      },
      json: true
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

exports.deviceMeteringUsage = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/meteringUsage',
    options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'Authorization': 'Basic ' + apiKey,
        'device-id-type': req.query.deviceIdType
      },
      json: true
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
