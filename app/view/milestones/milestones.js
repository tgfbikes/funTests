(function () {
	'use strict';
	
	angular
		.module('int1')
		.config(config)
		.controller('MilestonesCtrl', MilestonesCtrl);

	MilestonesCtrl.$inject = ['$scope', 'addMilestone', 'milestoneService'];

	function config($stateProvider, $urlRouterProvider) {

		$stateProvider.state('milestones', {
			url: '/milestones',
			controller: 'MilestonesCtrl as vm',
			templateUrl: 'app/view/milestones/milestones.html',
		});

	}

	function MilestonesCtrl ($scope, addMilestone, milestoneService) {
		var vm = this;
		vm.orderBySelect = 'Date';
		vm.orderBy = 'date';
		vm.milestones = milestoneService.getAllMilestones();
		vm.openModal = openModal;
		vm.updateOrder = updateOrder;

		function openModal () {
			addMilestone.open();
		}

		function updateOrder (orderBy) {
			vm.orderBy = orderBy;
			orderBy === 'date' ? vm.orderBySelect = 'Date' : vm.orderBySelect = 'Name';
		}

		var destroy = $scope.$on("$destroy", function () {
			//Cleanup anything that would persist beyond destruction, including $on/$watch
			destroy();
		});
	}
	
}());

