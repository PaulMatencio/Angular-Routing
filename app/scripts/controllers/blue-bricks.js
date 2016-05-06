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
    this.bricks = warehouse.brick.blue;

    this.addToCart = function(size, price) {
      manager.purchase('blue', size, price);
    };
  }]);
