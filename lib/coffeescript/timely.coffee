class TimeLine
  constructor: (options) ->
    @timeline = document.getElementsByClassName(options)[0]
    @initialise()

  initialise: ->
    @showTimeLine()
    @showTimeLineItems()
    @showVertLine()

  showTimeLine: ->
    timeline = @timeline
    setTimeout (->
      timeline.className += " loaded"
    ), 1

  showTimeLineItems: ->
    @items = @timeline.children
    i = 0
    l = @items.length

    while i < l
      @items[i].style.transition = "opacity 0.5s ease-out #{i/4}s"
      i++

  showVertLine: ->
    line = @createVertLine()
    @insertVertLine(line)

  createVertLine: ->
    span = document.createElement("span")
    span.className = "timeline-line"
    return span

  insertVertLine: (line) ->
    @timeline.insertBefore(line)
