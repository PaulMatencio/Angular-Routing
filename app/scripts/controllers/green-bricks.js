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
    this.count = 1;
    this.addToCart = function(size, price, count) {
      manager.purchaseItem('green', size, price, count);
    };
  }]);
