Airport = function() {
  this.planes = [];
};

Airport.prototype.confirmLand = function (plane) {
  this.planes.push(plane);
  plane.land;
};
