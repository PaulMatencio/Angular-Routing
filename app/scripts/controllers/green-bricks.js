'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:GreenBricksCtrl
 * @description
 * # GreenBricksCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('GreenBricksCtrl', ['warehouse','purchaseManager', function (warehouse, manager) {

    this.name = 'Green Bricks';
    this.bricks = warehouse.brick.green;

    this.addToCart = function(size, price) {
      manager.purchase('green', size, price);
    };
  }]);
