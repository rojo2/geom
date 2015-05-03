var Point = require("./point");

function Line(start, end) {
  this.start = start || new Point();
  this.end = end || new Point();
}

Line.prototype = {
  constructor: Line,

  length: function() {
    return Point.distance(this.start, this.end);
  },

  boundingBox: function() {
    var minx, miny, maxx, maxy;
    minx = Math.min(this.start.x, this.end.x);
    miny = Math.min(this.start.y, this.end.y);
    maxx = Math.max(this.start.x, this.end.x);
    maxy = Math.max(this.start.y, this.end.y);
    return new Rect(minx, miny, maxx - minx, maxy - miny);
  },

  angle: function() {
    return Point.angle(this.start, this.end);
  },

  add: function(l) {
    this.start.add(l.start);
    this.end.add(l.end);
    return this;
  },

  subtract: function(l) {
    this.start.subtract(l.start);
    this.end.subtract(l.end);
    return this;
  },

  multiply: function(l) {
    this.start.multiply(l.start);
    this.end.multiply(l.end);
    return this;
  },

  divide: function(l) {
    this.start.divide(l.start);
    this.end.divide(l.end);
    return this;
  },

  scaleBy: function(k) {
    this.start.scaleBy(k);
    this.end.scaleBy(k);
    return this;
  },

  sideOf: function(p) {
    return ((this.end.x - this.start.x) * (p.y - this.start.y) - (this.end.y - this.start.y) * (p.x - this.start.x));
  },

  contains: function(p) {
    return this.sideOf(p) == 0;
  },

  isLeft: function(p) {
    return this.sideOf(p) > 0;
  },

  isRight: function(p) {
    return this.sideOf(p) < 0;
  },

  copy: function(c) {
    this.start.copy(l.start);
    this.end.copy(l.end);
    return this;
  },

  clone: function() {
    return new Line(
      this.start.clone(),
      this.end.clone()
    );
  },

  toString: function() {
    return this.start.toString() + " -> " + this.end.toString();
  }

};

module.exports = Line;
