'use strict';

angular.
  module('chaiElement').
  component('chaiElement', {
    templateUrl : 'chai-element/chai-element.template.html',
    controller : [
      function ChaiElementController() {
        this.imageUrl = 'img/chai.jpg';
      }
    ]
  });
