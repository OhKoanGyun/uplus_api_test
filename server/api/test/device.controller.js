'use strict';

var _ = require('lodash');
var request = require('request');
var config = require('../../config/environment');
var env = require('../../config/local.env');
var apiKey = env.DEVICE_API_KEY;

exports.realtime = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/devices/devices/' + req.query.deviceId + '/realtimeInfo',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'token': req.query.token
      },
      json: true
    };

  request(options, function (err, response, body) {

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};

exports.hourlyUsage = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/devices/devices/hourly/usages',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'token': req.query.token
      },
      json: true
    };

  request(options, function (err, response, body) {

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};

exports.dailyUsage = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/devices/devices/daily/usages',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'token': req.query.token
      },
      json: true
    };

  request(options, function (err, response, body) {

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};

exports.setEventPush = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/devices/devices/events/push',
    options = {
      method: 'PUT',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'token': req.query.token
      },
      qs: {
        status: req.query.status
      },
      json: true
    };

  request(options, function (err, response, body) {

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};

exports.getEventPush = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/devices/devices/events/push',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'token': req.query.token
      },
      json: true
    };

  request(options, function (err, response, body) {

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};
