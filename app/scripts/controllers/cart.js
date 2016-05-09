/**
 * @ngdoc function
 * @name routingQuizApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('CartCtrl', ['purchaseManager', function (manager) {
    this.info = manager;

  this.removeCart = function(id,item) {
    manager.returnItem(id,item);
  }

  }]);
