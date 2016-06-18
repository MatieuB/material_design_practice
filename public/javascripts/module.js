(function() {
  'use strict';


  angular.module('matthew',['ngAnimate','ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:"./components/home/home.html",
      controller: function($scope){
        $scope.hidden1 = true;
        $scope.hidden2 = true;
        $scope.hidden3 = true;
        $scope.show1 = function(){
          $scope.hidden1 = !$scope.hidden1;
          $scope.hidden2 = true;
          $scope.hidden3 = true;
        }
        $scope.show2 = function(){
          $scope.hidden2 = !$scope.hidden2;
          $scope.hidden1 = true;
          $scope.hidden3 = true;
        }
        $scope.show3 = function(){
          $scope.hidden3 = !$scope.hidden3;
          $scope.hidden2 = true;
          $scope.hidden1 = true;
        }
        $scope.hideAll = function(){
          $scope.hidden1 = true;
          $scope.hidden2 = true;
          $scope.hidden3 = true;
        }
      }
    });
    // $stateProvider.html5Mode(true)
  });
  // angular.module('Reddit').factory('authInterceptor', function () {
  //   return {
  //     request: function(config) {
  //       if (localStorage.getItem('token')) {
  //         config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  //       }
  //       return config;
  //     },
  //     responseError: function(response) {
  //       console.log('from the interceptor: ',response);
  //       return response;
  //     }
  //   };
  // })
}());
