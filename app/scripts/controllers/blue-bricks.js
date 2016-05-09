'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:BlueBricksCtrl
 * @description
 * # BlueBricksCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('BlueBricksCtrl', ['warehouse','purchaseManager', function (warehouse,manager) {
    this.name = 'Blue Bricks';
    this.count = 1;
    this.bricks = warehouse.brick.blue;
    this.addToCart = function(size, price,count) {
      manager.purchaseItem('blue', size, price,count);
    };
  }]);
