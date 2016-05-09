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
    this.bricks = warehouse.brick.red;
    this.count = 1;
    this.addToCart = function(size, price, count) {
      manager.purchaseItem('red', size, price, count);
    };

  }]);
