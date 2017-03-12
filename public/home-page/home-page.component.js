'use strict';

angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: [
      function HomePageController() {
        this.navElements = [
          {name : 'Thela', link: 'thela', alt: 'Home'},
          {name : 'ChaiPatti', link: 'chaipatti', alt: 'Item 2'},
          {name : 'Shakkar', link: 'shakkar', alt: 'Item 3'},
          {name : 'Doodh', link: 'doodh', alt:'Item 4'},
          {name : 'Paani', link: 'paani', alt: 'Item 5'},
          {name : 'Adrak', link: 'adrak', alt: 'Contact'}
        ];
      }
    ]
  });
