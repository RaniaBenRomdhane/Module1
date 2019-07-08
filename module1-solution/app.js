(function(){
'use strict';
angular.module('MyApp',[])
.controller('MyController',MyController);
function MyController ($scope){
  $scope.name="";
  $scope.Value= 0;
  $scope.msg="";

  $scope.HowMuch = function(){
    var val=calcul($scope.name);
    $scope.Value=val + 1;}

  $scope.CheckIfTooMuch = function (){
    if (($scope.Value<=3)&&(0<$scope.Value)){$scope.msg="Enjoy!"}
    else if($scope.Value>3){$scope.msg="Too Much!"}
    else{$scope.msg="Please enter data first!"}
  }
  };

    function calcul(string){
      var v=0;
      for (var i=0 ; i < string.length ; i++)
      if(string[i]==','){v++;}
      return v;}


})();
