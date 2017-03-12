'use strict';

angular.module('shakkarElement').
  component('shakkarElement',{
    templateUrl : 'shakkar-element/shakkar-element.template.html',
    controller : [
      function ShakkarController() {
        this.link = 'shakkar';
        this.image1 = 'img/6.png';
      }
    ]
  });
