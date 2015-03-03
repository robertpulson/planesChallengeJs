describe('plane', function() {

  var plane = new Plane

  it('is flying when its created', function() {
    expect(plane.isFlying).toBe(true);
  });

  it('can land', function() {
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it('can take off', function() {
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toBe(true);
  });

});