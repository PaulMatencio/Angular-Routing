'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:BlueBricksCtrl
 * @description
 * # BlueBricksCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('BricksCtrl', ['$stateParams','warehouse','purchaseManager', function ($stateParams,warehouse, manager) {
    this.name = $stateParams[0].toUpperCase() + $stateParams[0].slice(1)+ '  Bricks';
    var bricks = warehouse.brick;
    this.bricks = bricks[$stateParams];
    var color = $stateParams;
    this.count = 1;
    this.addToCart = function( size, price) {
      manager.purchaseItem(color, size, price, count);
    };
  }]);
