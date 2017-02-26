'use strict';

angular.
  module('chaiwalaApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<chai-element></chai-element>'
          }).
          when('/item1', {
            template: '<chai-element></chai-element>'
          }).
          when('/item2', {
            template: '<chini-element></chini-element>'
          }).
          otherwise('/');
    }
]);
