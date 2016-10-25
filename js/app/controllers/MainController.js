function MainController($scope){
  $scope.name = 'mike'
  $scope.phone = '9512942111'
  $scope.email = 'mikegylling@yahoo.com'
}

angular
  .module('app')
  .controller('MainController', MainController)
