describe('Airport', function() {
  var airport = new Airport;
  var plane;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isFlying']);
  });

  describe('', function() {

    it('can land a plane', function() {
      airport.confirmLand(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it('knows how many planes it contains', function() {
      airport.confirmLand(plane);
      expect(airport.planesCount).toEqual(1);
    });
  });

});
