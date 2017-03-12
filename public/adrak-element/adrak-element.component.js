'use strict';

angular.
  module('adrakElement').
  component('adrakElement', {
    templateUrl : 'adrak-element/adrak-element.template.html',
    controller : [
      function AdrakElementController() {
        this.link = 'adrak';
        this.image = 'img/12.png';
      }
    ]
  });
