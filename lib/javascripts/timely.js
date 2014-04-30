var TimeLine;

TimeLine = (function() {
  function TimeLine(options) {
    this.timeline = document.getElementById(options);
    this.items = this.timeline.children;
    this.delete_links = document.getElementsByClassName('delete-timeline-item');
    this.initialise();
  }

  TimeLine.prototype.initialise = function() {
    this.registerClickListeners();
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

  TimeLine.prototype.registerClickListeners = function() {
    var i, l, _results;
    i = 0;
    l = this.delete_links.length;
    _results = [];
    while (i < l) {
      this.delete_links[i].addEventListener("click", this.deleteItem);
      _results.push(i++);
    }
    return _results;
  };

  TimeLine.prototype.deleteItem = function() {
    var item_styles;
    this.item = this.parentNode;
    item_styles = window.getComputedStyle(this.item);
    this.item_side = item_styles.getPropertyValue("float");
    debugger;
  };

  return TimeLine;

})();
