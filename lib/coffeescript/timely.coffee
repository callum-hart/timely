class TimeLine
  constructor: (options) ->
    @timeline = document.getElementById(options)
    @items = @timeline.children
    @delete_links = document.getElementsByClassName('delete-timeline-item')
    @initialise()

  initialise: ->
    @registerClickListeners()
    @showTimeLine()
    @showTimeLineItems()
    @showVertLine()

  showTimeLine: ->
    timeline = @timeline
    setTimeout (->
      timeline.className += " loaded"
    ), 1

  showTimeLineItems: ->
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

  registerClickListeners: ->
    i = 0
    l = @delete_links.length

    while i < l
      @delete_links[i].addEventListener "click", @deleteItem
      i++

  deleteItem: ->
    @item = this.parentNode
    item_styles = window.getComputedStyle(@item)
    @item_side = item_styles.getPropertyValue("float")

    debugger
