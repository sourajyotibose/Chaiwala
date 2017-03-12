'use strict';

angular.
  module('doodhElement').
  component('doodhElement', {
    templateUrl : 'doodh-element/doodh-element.template.html',
    controller : [
      function DoodhElementController() {
        this.link = 'doodh';
        this.imageUrl = 'img/8.png';
      }
    ]
  });
