(function () {
	'use strict';
	
	angular
		.module('int1')
		.factory('milestoneService', milestoneService);

	milestoneService.$inject = ['moment'];

	function milestoneService (moment) {

		var _milestones = [];

		var MileStone = function(name, date) {
			this.name = name;
			this.date = new moment(date).format('MMMM DD YYYY');
		};

		var milestoneService = {

			createMilestone: function (name, date) {
				var newMilestone = new MileStone(name, date);
				_milestones.push(newMilestone);
			},

			getAllMilestones: function () {
				return _milestones;
			}

		};

		return milestoneService;
	}
	
}());
