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
    /*
    .state('brick', {
      url:"/brick",
      templateUrl: "/views/bricks.html"
    })
    .state('brick.red', {
      url:"/red",
      templateUrl: "/views/redBricks.html",
      controller: "RedBricksCtrl as brick"
    })
    .state('brick.blue', {
      url:"/blue",
      templateUrl: "/views/blueBricks.html",
      controller: "BlueBricksCtrl as brick"
    })
    .state('brick.green', {
      url:"/green",
      templateUrl: "/views/greenBricks.html",
      controller: "GreenBricksCtrl as brick"
    })
    */
    .state('redBricks', {
      url:"/brick/red",
      templateUrl: "/views/redBricks.html",
      controller: "RedBricksCtrl as brick"
    })
    .state('blueBricks', {
      url:"/brick/blue",
      templateUrl: "/views/blueBricks.html",
      controller: "BlueBricksCtrl as brick"
    })
    .state('greenBricks', {
      url:"/brick/green",
      templateUrl: "/views/greenBricks.html",
      controller: "GreenBricksCtrl as brick"
    })
    .state('cart', {
      url:"/cart",
      templateUrl: "/views/cart.html",
      controller: "CartCtrl as cart"
    })
    .state('redBricks.cart', {
      url:"/cart",
      templateUrl: "/views/cart.html",
      controller: "CartCtrl as cart"
    })
    .state('blueBricks.cart', {
      url:"/cart",
      templateUrl: "/views/cart.html",
      controller: "CartCtrl as cart"
    })
    .state('greenBricks.cart', {
      url:"/cart",
      templateUrl: "/views/cart.html",
      controller: "CartCtrl as cart"
    });
  }]);
