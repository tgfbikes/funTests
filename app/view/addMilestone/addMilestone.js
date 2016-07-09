angular.module('int1')

  .factory("addMilestone", function ($rootScope, $uibModal) {

    return {
      open: function () {
        var $modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/view/addMilestone/addMilestone.html',
          controller: 'AddMilestoneCtrl as vm',
          resolve: {}
        });

       //  var listener = $rootScope.$on('$stateChangeStart', function () {
			// console.log('firing');
       //      $modalInstance.close('State Changed');
       //  });
      //
       //  $modalInstance.result.then(function () {
       //      listener();
       //  });

        return $modalInstance;
        }
      };
	})

  .controller('AddMilestoneCtrl', ['$scope', 'milestoneService', function ($scope, milestoneService, $uibModalInstance) {
    var vm = this;

    vm.name = '';
    vm.date = '';
    vm.saveMilestone = saveMilestone;

    function saveMilestone () {
      if (vm.name && vm.date) {
          milestoneService.createMilestone(vm.name, vm.date);
          // $uibModalInstance.close();
      }
    }

    var destroy = $scope.$on("$destroy", function () {
      //Cleanup anything that would persist beyond destruction, including $on/$watch
      destroy();
    });
  }]);
