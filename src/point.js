function Point(x,y) {
  this.x = x || 0.0;
  this.y = y || 0.0;
}

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
    return Math.sqrt(dx * dx + dy * dy);
  },

  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
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
