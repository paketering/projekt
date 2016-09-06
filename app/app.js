require('./js/saman.js')

const angular =require('angular');
var MainController = require('./js/MainController.js')
var service = require('./js/service.js')
var app = angular.module('app', [MainController.name, service.name]);
