angular.module('int1', ['ui.bootstrap','ui.router', 'angular-loading-bar','ngAnimate','angularMoment']);

angular.module('int1').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/milestones');

});

angular.module('int1').run(function($rootScope) {



});
