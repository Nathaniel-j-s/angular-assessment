angular.module('assessment', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'shopCtrl'
      }) //NO COMMAS OR WHATEVER HERE STOP DOING THAT
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html',
        controller: 'shopCtrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
        controller: 'shopCtrl'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: './views/shop.html',
        controller: 'shopCtrl'
      })
      .state('product-details', {
        url: '/product-details/:id',
        templateUrl: './views/product-details.html',
        controller: 'shopCtrl'
      })

  })
