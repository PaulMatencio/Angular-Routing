'use strict';

/**
 * @ngdoc service
 * @name routingQuizApp.purchaseManager
 * @description
 * # purchaseManager
 * Service in the routingQuizApp.
 */
angular.module('routingQuizApp')
  .service('purchaseManager', function () {
    this.total = 0.00;
    this.count = 0;
    this.contents = [];
    this.purchaseItem = function(color, size, price, count) {
      if (typeof count !== 'undefined')  {
        this.contents.push({"count": count, 'color': color, 'size': size, 'price': price});
        var total = this.total* 100;
        total += count* price * 100;
        this.total = (total/100);
        this.count += count ;
      }
    };

    this.returnItem = function(id,item) {
      var removed = this.contents.splice(id,1);
      var total = this.total* 100;
      var count = item.count;
      console.log(count);
      total     -= count* item.price * 100;
      this.total = (total/100);
      this.count -= item.count;
    }
  });
