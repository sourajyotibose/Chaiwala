'use strict';

angular.module('paniElement').
  component('paniElement',{
    templateUrl : 'pani-element/pani-element.template.html',
    controller :  [
      function paniController() {
        this.link = 'paani';
        this.image1 = 'img/10.png';
      }
    ]
  });
