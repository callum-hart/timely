var TimeLine;

TimeLine = (function() {
  function TimeLine(options) {
    this.timeline = document.getElementsByClassName(options)[0];
    this.initialise();
  }

  TimeLine.prototype.initialise = function() {
    this.showTimeLine();
    this.showTimeLineItems();
    return this.showVertLine();
  };

  TimeLine.prototype.showTimeLine = function() {
    var timeline;
    timeline = this.timeline;
    return setTimeout((function() {
      return timeline.className += " loaded";
    }), 1);
  };

  TimeLine.prototype.showTimeLineItems = function() {
    var i, l, _results;
    this.items = this.timeline.children;
    i = 0;
    l = this.items.length;
    _results = [];
    while (i < l) {
      this.items[i].style.transition = "opacity 0.5s ease-out " + (i / 4) + "s";
      _results.push(i++);
    }
    return _results;
  };

  TimeLine.prototype.showVertLine = function() {
    var line;
    line = this.createVertLine();
    return this.insertVertLine(line);
  };

  TimeLine.prototype.createVertLine = function() {
    var span;
    span = document.createElement("span");
    span.className = "timeline-line";
    return span;
  };

  TimeLine.prototype.insertVertLine = function(line) {
    return this.timeline.insertBefore(line);
  };

  return TimeLine;

})();
