var Point = require("./point");

function Circle(x,y,radius) {
  this.x = x || 0;
  this.y = y || 0;
  this.radius = radius || 0;
}

Circle.prototype = {
  constructor: Circle

  length: function() {
    return (this.radius * 2);
  },

  boundingBox: function() {
    return new Rect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  },

  center: function() {
    return new Point(this.x, this.y);
  },

  contains: function(p) {
    var result = true;
    if ("x" in p && "y" in p) {
      result &= (Point.hypothenuse(p.x - this.x, p.y - this.y) <= this.radius);
    }
    return result;
  },

  add: function(c) {
    this.x += c.x;
    this.y += c.y;
    if ("radius" in c) {
      this.radius += c.radius;
    }
    return this;
  },

  subtract: function(c) {
    this.x -= c.x;
    this.y -= c.y;
    if ("radius" in c) {
      this.radius -= c.radius;
    }
    return this;
  },

  multiply: function(c) {
    this.x *= c.x;
    this.y *= c.y;
    if ("radius" in c) {
      this.radius *= c.radius;
    }
    return this;
  },

  divide: function(c) {
    this.x /= c.x;
    this.y /= c.y;
    if ("radius" in c) {
      this.radius /= c.radius;
    }
    return this;
  },

  scaleBy: function(k) {
    this.x *= k;
    this.y *= k;
    this.radius *= k;
    return this;
  },

  clone: function() {
    return new Circle(this.x,this.y,this.radius);
  },

  copy: function(c) {
    this.x = c.x;
    this.y = c.y;
    if ("radius" in c) {
      this.radius = c.radius;
    }
    return this;
  },

  toString: function() {
    return this.x + ", " + this.y + ", " + this.radius;
  }

};

module.exports = Circle;
