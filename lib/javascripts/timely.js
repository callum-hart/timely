var TimeLines, Timely, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Timely = (function() {
  function Timely(options) {
    this.elm = document.getElementsByClassName(options);
    this.init();
  }

  Timely.prototype.init = function() {
    return this.showTimeLine();
  };

  Timely.prototype.showTimeLine = function() {
    return this.elm[0].className += ' loaded';
  };

  return Timely;

})();

TimeLines = (function(_super) {
  __extends(TimeLines, _super);

  function TimeLines() {
    _ref = TimeLines.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  TimeLines.prototype.showTimeLine = function() {
    var i, l, _results;
    i = 0;
    l = this.elm.length;
    _results = [];
    while (i < l) {
      this.elm[i].className += ' loaded';
      _results.push(i++);
    }
    return _results;
  };

  return TimeLines;

})(Timely);
