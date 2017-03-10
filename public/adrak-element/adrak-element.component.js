'use strict';

angular.
  module('adrakElement').
  component('adrakElement', {
    templateUrl : 'adrak-element/adrak-element.template.html',
    controller : [
      function AdrakElementController() {
        this.link = 'item4';
        this.imageUrl = 'img/chai.jpg';
      }
    ]
  });
