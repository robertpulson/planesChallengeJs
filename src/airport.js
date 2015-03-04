Airport = function() {
  this.planes = [];
  this.capacity = 6;
};

Airport.prototype.confirmLand = function(plane) {
  if (this.isFull() === true) {
    throw new Error('The airport is full come back later!');
  } else if (this.isWeatherOk() === false) {
    throw new Error('The weather is not ok try again later!');
  } else {
  this.planes.push(plane);
  plane.land();
  };
};

Airport.prototype.dispatch = function(plane) {
  this.planes.splice(this.planes.indexOf(plane));
  plane.takeOff();
};

Airport.prototype.isFull = function() {
  if (this.planes.length >= this.capacity) return true;
};

Airport.prototype.isWeatherOk = function() {
  if (Math.floor((Math.random() * 5) + 1) != 1) return true;
};