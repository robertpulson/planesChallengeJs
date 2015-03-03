describe('Airport', function() {
  var airport
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isFlying']);
  });

  describe('', function() {

    it('can land a plane', function() {
      airport.confirmLand(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it('knows how many planes it contains', function() {
      airport.confirmLand(plane);
      expect(airport.planes.length).toEqual(1);
    });

  });

});
