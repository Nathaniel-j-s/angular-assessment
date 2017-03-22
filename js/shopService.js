angular.module('assessment').service('shopService', function($http) {

  this.getSomeClothes = function() {
    return $http( {
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    });
  };

  this.getCloth = function(id) {
    return $http( {
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/' + id
    })
  };

})
