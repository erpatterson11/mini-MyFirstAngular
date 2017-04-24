angular.module('friendsList').controller('mainCtrl', function($scope) {

  $scope.friends = ["Jordyn","Ryan","Chelsey"];


  $scope.addFriend = function(newFriend) {
    $scope.friends.push(newFriend)
    $scope.newFriend = "";
  }





})
