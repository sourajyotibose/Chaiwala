'use strict';

angular.
  module('chaiElement').
  component('chaiElement', {
    templateUrl : 'chai-element/chai-element.template.html',
    controller : [
      function ChaiElementController() {
        this.link = 'item1';
        this.imageUrl = 'img/chai.jpg';
      }
    ]
  });
