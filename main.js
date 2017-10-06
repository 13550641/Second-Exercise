// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		.when('/acerca', {
			templateUrl : 'pages/acerca.html',
			controller 	: 'aboutController'
		})
		.when('/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

angularRoutingApp.controller('mainController', function($scope) {
	$scope.message = 'Hi cuties!';
});

angularRoutingApp.controller('aboutController', function($scope) {
	$scope.message = ' Programacion Cliente -Servidor ';
});

angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = ' Alonso Salcido ';
});