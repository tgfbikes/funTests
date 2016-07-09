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
  	vm.opened = false;
    vm.saveMilestone = saveMilestone;
    vm.openDatePopUp = openDatePopUp;
    vm.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    function saveMilestone () {
      if (vm.name && vm.date) {
          milestoneService.createMilestone(vm.name, vm.date);
          // $uibModalInstance.close();
      }
    }
	  
  	function openDatePopUp () {
      vm.opened = true;
	}

    var destroy = $scope.$on("$destroy", function () {
      //Cleanup anything that would persist beyond destruction, including $on/$watch
      destroy();
    });
  }]);
