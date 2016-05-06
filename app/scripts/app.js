'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: "/",
      templateUrl :"/views/instructions.html"
    })
    .state('redBricks', {
      url:"/redBricks",
      templateUrl: "/views/bricks.html",
      controller: "RedBricksCtrl as brick"
    })
    .state('greenBricks', {
      url: "/greenBricks",
      templateUrl: "/views/bricks.html",
      controller: "greenBricksCtrl as brick"
    })
    .state('blueBricks', {
      url: "/blueBricks",
      templateUrl: "/views/bricks.html",
      controller: "blueBricksCtrl as brick"
    })
    .state('cart', {
      url:"/cart",
      templateUrl: "/views/cart.html",
      controller: "cartCtrl as cart"
    });

  }]);
