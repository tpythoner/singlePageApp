"use strict";

var routeApp = angular.module('routeApp', ['ngRoute', 'ngTouch']);
routeApp.config(function($routeProvider, $locationProvider) {

	$routeProvider
	// route for the home page
	.when('/', {
		templateUrl : '/home.htm',
		controller  : 'mainController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : '/about.htm',
		controller  : 'aboutController'
	})

	// route for the contact page
	.when('/contact', {
		templateUrl : '/contact.htm',
		controller  : 'contactController'
	})

	// route for the other page
	.otherwise({
		redirectTo: '/'
	});

    // use the HTML5 History API
    $locationProvider.html5Mode(false);

});
