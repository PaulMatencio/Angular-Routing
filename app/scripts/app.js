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
    .state('brick', {
      url:"/brick",
      templateUrl: "/views/bricks.html",
      controller: "BricksCtrl as brick"
    })
    .state('brick.red', {
      url:"/brick/red",
      templateUrl: "/views/redBricks.html"
      //controller: "BricksCtrl as brick"
    })
    .state('brick.blue', {
      url:"/brick/blue",
      templateUrl: "/views/blueBricks.html"
      //controller: "BlueBricksCtrl as brick"
    })
    .state('brick.green', {
      url:"/brick/green",
      templateUrl: "/views/greenBricks.html"
      // controller: "GreenBricksCtrl as brick"
    })
    .state('cart', {
      url:"/cart",
      templateUrl: "/views/cart.html",
      controller: "CartCtrl as cart"
    });

  }]);
