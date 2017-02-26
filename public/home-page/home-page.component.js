'use strict';

angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: [
      function HomePageController() {
        this.navElements = [
          {name : 'Item 1', link: 'item1'},
          {name : 'Item 2', link: 'item2'},
          {name : 'Item 3', link: 'item3'},
          {name : 'Item 4', link: 'item4'},
          {name : 'Item 5', link: 'item5'}
        ];
      }
    ]
  });
