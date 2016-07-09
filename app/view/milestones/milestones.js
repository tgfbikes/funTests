angular.module('int1').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('milestones', {
        url: '/milestones',
        controller: 'MilestonesCtrl as vm',
        templateUrl: 'app/view/milestones/milestones.html',
    });

}).controller('MilestonesCtrl', function ($scope, moment) {
    var vm = this;
	vm.milestones = [
		{
			name: 'test1',
			date: new moment()
		},
		{
			name: 'test',
			date: new moment()
		}
	];
	vm.addMilestone = addMilestone;


	function addMilestone() {
		vm.milestones[0].name = 'changed';
	}

    var destroy = $scope.$on("$destroy", function () {
        //Cleanup anything that would persist beyond destruction, including $on/$watch
        destroy();
    });

});
