'use strict';

angular.module('thelaElement').
  component('thelaElement',{
    templateUrl: 'thela-element/thela-element.template.html',
    controller: [
      function ThelaController() {
        this.link = 'thela';
        this.image1 = 'img/1.png';
        this.image2 = 'img/2.png';
      }
    ]
  });
