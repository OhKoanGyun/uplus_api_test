'use strict';

var express = require('express');
var adminCtrl = require('./admin.controller');
var deviceCtrl = require('./device.controller');

var router = express.Router();

router.get('/admin/register', adminCtrl.register);
router.get('/admin/devices/event', adminCtrl.deviceEvent);
router.get('/admin/devices/events', adminCtrl.deviceEvents);
router.get('/admin/devices/status', adminCtrl.deviceStatus);
router.get('/admin/devices/reset', adminCtrl.deviceReset);
router.get('/admin/devices/meteringUsage', adminCtrl.deviceMeteringUsage);

router.get('/device/realtime', deviceCtrl.realtime);
router.get('/device/hourly/usage', deviceCtrl.hourlyUsage);
router.get('/device/daily/usage', deviceCtrl.dailyUsage);
router.get('/device/events/push/set', deviceCtrl.setEventPush);
router.get('/device/events/push/get', deviceCtrl.getEventPush);

module.exports = router;
