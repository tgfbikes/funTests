angular.module('int1')

  .factory('milestoneService', ['moment', function(moment) {

    var _milestones = [];
	  
    var MileStone = function(name, date) {
      this.name = name;
      this.date = new moment();
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
}]);
