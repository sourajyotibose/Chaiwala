'use strict';

angular.
  module('doodhElement').
  component('doodhElement', {
    templateUrl : 'doodh-element/doodh-element.template.html',
    controller : [
      function DoodhElementController() {
        this.link = 'item3';
        this.imageUrl = 'img/chai.jpg';
      }
    ]
  });
