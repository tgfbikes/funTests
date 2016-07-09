angular.module('int1').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('milestones', {
        url: '/milestones',
        controller: 'MilestonesCtrl as vm',
        templateUrl: 'app/view/milestones/milestones.html',
    });

}).controller('MilestonesCtrl', ['$scope', 'addMilestone', 'milestoneService', function ($scope, addMilestone, milestoneService) {
    var vm = this;
	vm.orderBySelect = 'Date';
	vm.orderBy = 'date';
	vm.milestones = milestoneService.getAllMilestones();
	vm.openModal = openModal;
	vm.updateOrder = updateOrder;


	function openModal () {
      var modalInstance = addMilestone.open();
	}
	
	function updateOrder (orderBy) {
		vm.orderBy = orderBy;
		orderBy === 'date' ? vm.orderBySelect = 'Date' : vm.orderBySelect = 'Name';
	}

    var destroy = $scope.$on("$destroy", function () {
      //Cleanup anything that would persist beyond destruction, including $on/$watch
      destroy();
    });

}]);
