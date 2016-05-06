'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:BlueBricksCtrl
 * @description
 * # BlueBricksCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('BricksCtrl', ['warehouse','purchaseManager', function (warehouse, manager) {

    var bricks = warehouse.brick;

    this.redBricks = bricks.red ;
    this.greenBricks = bricks.green ;
    this.blueBricks = bricks.blue ;

    this.addToCart = function(color, size, price) {
      manager.purchase(color, size, price);
    };
  }]);
