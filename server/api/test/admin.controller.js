'use strict';

var _ = require('lodash');
var request = require('request');
var config = require('../../config/environment');
var env = require('../../config/local.env');
var apiKey = env.ADMIN_API_KEY;

exports.register = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/register',
    options = {
      method: 'POST',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'token': req.query.token
      },
      body: {
        serialNumber: req.query.serialNumber,
        deviceId: req.query.deviceId
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

exports.deviceEvent = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/event',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
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

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};

exports.deviceEvents = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/events',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey
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

    var statusCode = response.statusCode;

    if (err) {
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send(body);
    }

  });

};

exports.deviceStatus = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/status',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'device-id-type': req.query.deviceIdType
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

exports.deviceReset = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/reset',
    options = {
      method: 'PUT',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'device-id-type': req.query.deviceIdType
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

exports.deviceMeteringUsage = function (req, res) {

  var domain = req.query.host || config.domain,
    endpoint = domain + '/admin/1.2/devices/' + req.query.deviceId + '/meteringUsage',
    options = {
      method: 'GET',
      url: domain + endpoint,
      headers: {
        'Authorization': apiKey,
        'device-id-type': req.query.deviceIdType
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
