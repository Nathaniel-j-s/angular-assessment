angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

  $scope.getSomeClothes = function() {
    shopService.getSomeClothes().then(function(response) {
      $scope.clothes = response.data;
      console.log(response);
      $scope.id = response.data.id;

      $scope.getCloth = function(id) {
        shopService.getCloth(id).then(function(response) {
          $scope.picked = response.data;
        });
      };
      $scope.getCloth($scope.id);
    })
  };

  $scope.getSomeClothes();

})
