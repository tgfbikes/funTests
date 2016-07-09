angular.module('int1')
    .factory("addMilestone", function ($rootScope, $uibModal) {
		return {
			open: function () {
				var $modalInstance = $uibModal.open({
					templateUrl: 'app/view/addMilestone/addMilestone.html',
					controller: 'AddMilestoneCtrl as vm',
					resolve: {	}
				});
				
				var listener = $rootScope.$on('$stateChangeStart', function () {
					$modalInstance.dismiss('State Changed');
				});
				
				$modalInstance.result.finally(function () {
					listener();
				});
				return $modalInstance;
			}
		};
	}).controller('AddMilestoneCtrl', function ($scope, $uibModalInstance) {
        var vm = this;
        
        vm.saveMilestone = saveMilestone;
			
		function saveMilestone () {
			console.log('saveMilestone');
        //     $uibModalInstance.close(result);
        }
        
        var destroy = $scope.$on("$destroy", function () {
            //Cleanup anything that would persist beyond destruction, including $on/$watch
            destroy();
        });
    });
