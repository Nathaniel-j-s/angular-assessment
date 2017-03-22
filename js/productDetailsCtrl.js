angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams) {

  $scope.getCloth = function(id) {
    shopService.getCloth(id).then(function(response) {
      $scope.product = response.data;
      console.log(response);
    })
  };
  $scope.getCloth();

})
