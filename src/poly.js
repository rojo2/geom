var Line = require("./line");
var Rect = require("./rect");
var Point = require("./point");

function Poly(points) {
  this.points = points || [];
  this.segments = [];
}

Poly.prototype = {
  constructor: Poly,

  buildSegments: function() {
    for (var i = 0; i < this.points.length; i++) {
      var start = this.points[i];
      var end = this.points[(i + 1) % this.points.length];
      this.segments.push(new Line(start, end));
    }
  },

  boundingBox: function() {
    var maxx = Number.MIN_VALUE,
        maxy = Number.MIN_VALUE,
        minx = Number.MAX_VALUE,
        miny = Number.MAX_VALUE;
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      maxx = Math.max(point.x, maxx);
      minx = Math.min(point.x, minx);
      maxy = Math.max(point.y, maxy);
      miny = Math.min(point.y, miny);
    }
    return new Rect(minx, miny, maxx - minx, maxy - miny);
  },

  center: function() {
    // TODO: Calculate center.
  },

  add: function() {
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      point.add(c);
    }
    return this;
  },

  subtract: function(c) {
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      point.subtract(c);
    }
    return this;
  },

  multiply: function(c) {
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      point.multiply(c);
    }
    return this;
  },

  divide: function(c) {
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      point.divide(c);
    }
    return this;
  },

  scaleBy: function(k) {
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      point.scaleBy(c);
    }
    return this;
  },

  constains: function(c) {
    if (!this.segments.length) {
      this.buildSegments();
    }

    var result = true;
    for (var i = 0; i < this.segments.length; i++) {
      var segment = this.segments[i];
      result &= segment.isOnRight(c);
    }
    return result;
  },

  copy: function(p) {
    this.points = p.points.slice();
    this.segments = [];
  },

  clone: function() {
    return new Poly(this.points.slice());
  },

  toString: function() {
    var str = "";
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      str += (point.x + ", " + point.y + ";");
    }
    return str;
  }
};

module.exports = Poly;
