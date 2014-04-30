class Timely
  constructor: (options) ->
    @elm = document.getElementsByClassName(options)
    @init()

  init: ->
    @showTimeLine()

  showTimeLine: ->
    @elm[0].className += ' loaded'

class TimeLines extends Timely
  showTimeLine: ->
    i = 0
    l = @elm.length

    while i < l
      @elm[i].className += ' loaded'
      i++