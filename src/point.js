function Point(x,y) {
  this.x = x || 0.0;
  this.y = y || 0.0;
}

Point.hypothenuse = function(a,b) {
  return Math.sqrt(a * a + b * b);
};

Point.distance = function(a,b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  return Point.hypothenuse(dx,dy);
};

Point.angle = function(a,b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  return Math.atan2(dy, dx);
};

Point.prototype = {

  constructor: Point,

  add: function(p) {
    this.x += p.x;
    this.y += p.y;
    return this;
  },

  subtract: function(p) {
    this.x -= p.x;
    this.y -= p.y;
    return this;
  },

  multiply: function(p) {
    this.x *= p.x;
    this.y *= p.y;
    return this;
  },

  divide: function(p) {
    this.x /= p.x;
    this.y /= p.y;
    return this;
  },

  scaleBy: function(k) {
    this.x *= k;
    this.y *= k;
    return this;
  },

  angle: function(p) {
    var dx = this.x - p.x;
    var dy = this.y - p.y;
    return Math.atan2(dy, dx);
  },

  distance: function(p) {
    var dx = this.x - p.x;
    var dy = this.y - p.y;
    return Point.hypothenuse(dx, dy);
  },

  length: function() {
    return Point.hypothenuse(this.x, this.y);
  },

  normalize: function() {
    var length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  },

  clone: function() {
    return new Point(this.x, this.y);
  },

  copy: function(p) {
    this.x = p.x;
    this.y = p.y;
    return this;
  },

  toString: function() {
    return this.x + ", " + this.y;
  }

};

module.exports = Point;
