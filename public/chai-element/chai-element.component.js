'use strict';

angular.
  module('chaiElement').
  component('chaiElement', {
    templateUrl : 'chai-element/chai-element.template.html',
    controller : [
      function ChaiElementController() {
        this.link = 'chaipatti';
        this.imageUrl = 'img/4.png';
      }
    ]
  });
