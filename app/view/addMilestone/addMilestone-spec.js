///<reference path="../../../.grunt/grunt-contrib-jasmine/jasmine.js"/>
describe('AddMilestoneCtrl', function() {

    beforeEach(module('int1'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('AddMilestoneCtrl', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);

    }));

});
