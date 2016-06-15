/**
 * Created by Shafaq_Ahsan on 6/15/2016.
 */
var app = angular.module('starter', ['ionic'])

app.controller('AppCtrl',function ($scope) {
  $scope.OnClick = function(){
    alert("HELLO! :)");
  }
  $scope.items = ['Karachi', 'Lahore', 'Islamabad']

})
