describe('Airport', function() {
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isFlying']);
  });

  it('can land a plane', function() {
    airport.confirmLand(plane);
    expect(airport.planes).toEqual([plane]);
    expect(plane.land).toHaveBeenCalledWith();
  });

  it('can dispatch a plane', function() {
    airport.confirmLand(plane);
    expect(airport.planes).toEqual([plane]);
    airport.dispatch(plane);
    expect(airport.planes).toEqual([]);
    expect(plane.takeOff).toHaveBeenCalledWith();
  });

  it('knows how many planes it contains', function() {
    airport.confirmLand(plane);
    expect(airport.planes.length).toEqual(1);
  });

  it('knows when it is full', function() {
    for (var i = 6; i > 0; i--) {
      airport.confirmLand(plane);
    };
    expect(airport.isFull()).toBe(true);
  });

  it('does not allow a plane to land if it is full', function() {
    for (var i = 6; i > 0; i--) {
      airport.confirmLand(plane);
    };
    expect(function(){ airport.confirmLand(plane); }).toThrow(new Error('The airport is full come back later!'));
  });

  it('knows if the weather is Ok', function() {
    spyOn(airport, 'isWeatherOk').and.returnValue(true);
    expect(airport.isWeatherOk()).toBe(true);
  });

  it('knows if the weather is not Ok', function() {
    spyOn(airport, 'isWeatherOk').and.returnValue(false);
    expect(airport.isWeatherOk()).toBe(false);
  });

  it('does not allow a plane to land if the weather is not ok', function() {
    spyOn(airport, 'isWeatherOk').and.returnValue(false);
    expect(function(){ airport.confirmLand(plane); }).toThrow(new Error('The weather is not ok try again later!'));
  });

});
