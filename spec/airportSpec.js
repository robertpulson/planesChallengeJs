describe('Airport', function() {
  var airport = new Airport

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isFlying']);
  });

  describe('weather', function() {

    it('can land a plane', function() {
      airport.confirm_land(plane)
      expect(airport.plane_count).toEqual(1) 
    });

  });

});
