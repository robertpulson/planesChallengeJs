Plane = function () {
  this.isFlying = true;
};

Plane.prototype.land = function() {
  this.isFlying = false;
};