describe('plane', function() {

  describe('is flying when its created', function() {
    plane = new Plane
    expect(plane.isFlying).toBe(true);
  });


});