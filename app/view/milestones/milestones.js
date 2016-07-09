angular.module('int1').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('milestones', {
        url: '/milestones',
        controller: 'MilestonesCtrl as vm',
        templateUrl: 'app/view/milestones/milestones.html',
    });

}).controller('MilestonesCtrl', ['$scope', 'addMilestone', 'milestoneService', function ($scope, addMilestone, milestoneService) {
    var vm = this;
	vm.milestones = milestoneService.getAllMilestones();
	vm.openModal = openModal;


	function openModal() {
      var modalInstance = addMilestone.open();
	}

    var destroy = $scope.$on("$destroy", function () {
      //Cleanup anything that would persist beyond destruction, including $on/$watch
      destroy();
    });

}]);
