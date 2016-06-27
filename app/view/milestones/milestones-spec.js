///<reference path="../../../.grunt/grunt-contrib-jasmine/jasmine.js"/>
describe('MilestonesCtrl', function() {

    beforeEach(module('int1'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MilestonesCtrl', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);
        
    }));

});
