angular.module('int1').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('milestones', {
        url: '/milestones',
        controller: 'MilestonesCtrl as vm',
        templateUrl: 'app/view/milestones/milestones.html',
    });

}).controller('MilestonesCtrl', function ($scope) {
    var vm = this;
	vm.milestones = ['hello'];
	
    var destroy = $scope.$on("$destroy", function () {
        //Cleanup anything that would persist beyond destruction, including $on/$watch
        destroy();
    });

});
