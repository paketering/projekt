require('./js/saman.js')

const angular =require('angular');
var MainController = require('./js/MainController.js')
var service = require('./js/service.js')
var app = angular.module('app', [MainController.name, service.name]);

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('index', {
            url: '/index',
            templateUrl: 'public/index.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        	url: '/update',
        	 templateUrl: 'public/update.html',
        	 controller: ''
            // we'll get to this in a bit       
        });
        
});
