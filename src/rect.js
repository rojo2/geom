var Point = require("./point");

function Rect(x,y,width,height) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
}

Rect.prototype = {
  constructor: Rect,

  length: function() {
    return Point.hypothenuse(this.width, this.height);
  },

  contains: function(r) {
    var result = true;
    if ("x" in r) {
      result &= (r.x >= this.x);
    }

    if ("y" in r) {
      result &= (r.y >= this.y);
    }

    if ("width" in r) {
      result &= (r.width >= this.width);
    }

    if ("height" in r) {
      result &= (r.height >= this.height);
    }
    return result;
  },

  intersection: function(r) {
    var xs = Math.max(this.x, r.x);
    var ys = Math.max(this.y, r.y);

    var xe = Math.min(this.x + this.width, r.x + r.width);
    var ye = Math.min(this.y + this.height, r.y + r.height);

    var w = xe - xs;
    var h = ye - ys;

    return new Rect(x, y, w, h);
  },

  subdivide: function() {
    var w = this.width * 0.5,
        h = this.height * 0.5;

    return [
      new Rect(this.x, this.y, w, h),
      new Rect(this.x + w, this.y, w, h),
      new Rect(this.x, this.y + h, w, h),
      new Rect(this.x + w, this.y + h, w, h)
    ];
  },

  center: function() {
    return new Point(this.x + (this.width * 0.5), this.y + (this.height * 0.5));
  },

  topLeft: function() {
    return new Point(this.x, this.y);
  },

  bottomRight: function() {
    return new Point(this.x + this.width, this.y + this.height);
  },

  add: function(r) {
    this.x += r.x;
    this.y += r.y;
    if ("width" in r) {
      this.width += r.width;
    }

    if ("height" in r) {
      this.height += r.height;
    }
    return this;
  },

  subtract: function(r) {
    this.x -= r.x;
    this.y -= r.y;
    if ("width" in r) {
      this.width -= r.width;
    }

    if ("height" in r) {
      this.height -= r.height;
    }
    return this;
  },

  multiply: function(r) {
    this.x *= r.x;
    this.y *= r.y;
    if ("width" in r) {
      this.width *= r.width;
    }

    if ("height" in r) {
      this.height *= r.height;
    }
    return this;
  },

  divide: function(r) {
    this.x /= r.x;
    this.y /= r.y;
    if ("width" in r) {
      this.width /= r.width;
    }

    if ("height" in r) {
      this.height /= r.height;
    }
    return this;
  },

  scaleBy: function(k) {
    this.x *= k;
    this.y *= k;
    this.width *= k;
    this.height *= k;
    return this;
  },

  clone: function() {
    return new Rect(this.x, this.y, this.width, this.height);
  },

  copy: function(r) {
    this.x = r.x;
    this.y = r.y;
    this.width = r.width;
    this.height = r.height;
    return this;
  },

  toString: function() {
    return this.x + ", " + this.y + ", " + this.width + ", " + this.height;
  }
};

module.exports = Rect;
