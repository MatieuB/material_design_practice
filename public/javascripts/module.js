(function() {
  'use strict';

  angular.module('matthew',['ngAnimate','ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:"./components/home/home.html"
    })
    .state('projects', {
      url: '/projects',
      templateUrl:"../components/home/projects.html",
      controller: function($scope){
      }
    })
    .state('resume', {
      url: '/resume',
      templateUrl:"./components/home/resume.html",
      controller: function($scope){
      }
    })
    // $stateProvider.html5Mode(true)
  })
}());
