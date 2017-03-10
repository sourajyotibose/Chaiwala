'use strict';

angular.
  module('chiniElement').
  component('chiniElement', {
    templateUrl : 'chini-element/chini-element.template.html',
    controller : [
      function ChiniElementController() {
        this.link = 'item2';
        this.imageUrl = 'img/chai.jpg';
      }
    ]
  });
