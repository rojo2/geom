function Vector2(x,y) {
  this.x = x;
  this.y = y;
}

Vector2.prototype = {
  constructor: Vector2,

  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },

  add: function() {
    if (arguments.length === 1 &&
        "x" in arguments[0] &&
        "y" in arguments[0]) {
      this.x += arguments[0].x;
      this.y += arguments[0].y;
    } else if (arguments.length === 2) {
      this.x += x;
      this.y += y;
    }
  },

  subtract: function() {
    if (arguments.length === 1 &&
        "x" in arguments[0] &&
        "y" in arguments[0]) {
      this.x -= arguments[0].x;
      this.y -= arguments[0].y;
    } else if (arguments.length === 2) {
      this.x -= x;
      this.y -= y;
    }
  },

  scaleBy: function(k) {
    this.x *= k;
    this.y *= k;
  },

  distance: function(v) {
    var dx = this.x - v.x;
    var dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  angle: function(v) {
    return Math.atan2(this.y - v.y, this.x - v.x);
  },

  normalize: function() {
    var length = this.length();
    this.x /= length;
    this.y /= length;
  },

  toString: function() {
    return x + ", " + y;
  }
};


module.exports = Vector2;
