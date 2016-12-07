  'use strict';

var app =   angular.module('matthew',['ngAnimate','ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:"./views/home.html"
    })
    .state('projects', {
      url: '/projects',
      templateUrl:"../views/projects.html",
      controller: function($scope){
      }
    })
    .state('resume', {
      url: '/resume',
      templateUrl:"./views/resume.html",
      controller: function($scope){
      }
    })
    // $stateProvider.html5Mode(true)
  })
