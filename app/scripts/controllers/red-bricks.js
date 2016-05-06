'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:RedBricksCtrl
 * @description
 * # RedBricksCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('RedBricksCtrl', ['warehouse','purchaseManager', function (warehouse, manager) {

    this.name = 'Red Bricks';
    console.log(warehouse);
    this.bricks = warehouse.brick.red;

    this.addToCart = function(size, price) {
      manager.purchase('red', size, price);
    };
    console.log(this);
  }]);
