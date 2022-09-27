/* Copyright 2011 Shea Barton 
 * No unauthorized copying or modification
 */
var cg = {
  lastTime: (new Date()).getTime(),
   config: {
     width: 640,
     height: 960,
     autosize: true,
     circle: {
       count: 1.75, // per 10,000 px2
       minRadius: 5, // or 35 less than player
       maxRadius: 55, // or 15 more than player
       playerRadius: 10,
       radiusInterval: 10,
       speedScale: 3,
       colors: ['Blue', 'DeepSkyBlue', 'MediumSlateBlue', 'Aquamarine', 'Lime', 'Indigo', 'Red', 'DarkRed', 'Fuchsia', 'Magenta', 'Orange', 'OrangeRed', 'GreenYellow', 'Purple']
     },
     touchmove: isEventSupported('touchmove')
   },
   circles: [],
   death: function() {
     pts = cg.player.radius
     this.stop()
     this.dispText = function() {
       this.ctx.font = '40pt Verdana'
       this.ctx.fillStyle = 'white'
       w = this.ctx.measureText(t = 'You dead').width
       this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2)

       w = this.ctx.measureText(t = (pts - cg.config.circle.playerRadius) + ' pts').width
       this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 + 60)

       this.ctx.font = '20pt Verdana'
       w = this.ctx.measureText(t = '(click to restart)').width
       this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 + 110)
     }
     $(this.canvas).click(function() {
       cg.dispText = function() {}
       cg.start()
     })
   },
   stop: function() {
     $(window).unbind('keydown')
     $(window).unbind('blur')
     $(document).unbind('touchmove')
     $(this.canvas).unbind('mousemove')
     cg.showCursor()
     this.player = false
   },
   start: function() {
     cg.dispText = function() {}
     $(cg.canvas).unbind('click')
     cg.player = new Player()
     cg.circles = []
     cg.hideCursor()
     if(cg.config.touchmove)
       $(document).bind('touchmove', cg.touchMove)
     else
       $(cg.canvas).mousemove(cg.mouseMove)
     $(window).blur(function() {
       cg.pause()
     })
     $(window).keydown(function(e) {
       if(e.keyCode == 32) {
         cg.togglePause()
         e.preventDefault()
       }
     })
   },
   maxCircles: function() {
     return Math.round(cg.config.width * cg.config.height / (10 * 1000) / cg.config.circle.count)
   },
   hideCursor: function() {
     $(cg.canvas).css('cursor', 'none')
   },
   showCursor: function() {
     $(cg.canvas).css('cursor', 'default')
   },
   pause: function() {
     if(!this.paused) {
       cg.showCursor()
       cg.dispText = function() {
         cg.ctx.font = '40pt Verdana'
         cg.ctx.fillStyle = 'white'
         w = cg.ctx.measureText(t = 'Paused').width
         cg.ctx.fillText(t, (cg.config.width - w)/2, cg.config.height / 2)

         cg.ctx.font = '20pt Verdana'


         w = this.ctx.measureText(t = '(press space to unpause)').width
         cg.ctx.fillText(t, (cg.config.width - w)/2, cg.config.height / 2 + 60)
       }
       this.paused = true
     }
   },
   unpause: function() {
     if(this.paused) {
       cg.dispText = function() {}
       cg.hideCursor()
       this.paused = false
     }
   },
   togglePause: function() {
     if(this.paused)
       this.unpause()
     else
       this.pause()
   },
   init: function() {
     cg.autosize()
     this.z = new Image()
     this.z.src = 'zazub.png'

     this.canvas = $('canvas')
     this.canvas.attr({width: this.config.width, height: this.config.height})
     this.canvas = this.canvas[0]
     this.ctx = this.canvas.getContext('2d')

     for(var i = this.circles.length; i < cg.maxCircles(); i++)
       this.circles[i] = new Circle(true)


     var mm = function(e) {
       if(cg.inZBounds(e.clientX, e.clientY)) {
         $(cg.canvas).css('cursor','pointer')
       } else {
         $(cg.canvas).css('cursor', 'default')
       }
     }

     $(this.canvas).mousemove(mm)

     $(this.canvas).click(function(e) {
       if(cg.inZBounds(e.clientX,e.clientY)) {
         window.open('http://agario.sx','_blank')
       } else {
         $(cg.canvas).unbind('click')
         cg.start()
       }
     })

     this.tick()
   },
   inZBounds: function(x,y) {
     return (x > cg.zLogoX &&
        x < cg.zLogoX + cg.zWidth &&
        y > cg.zLogoY &&
        y < cg.zLogoY + cg.zHeight)
   },
   autosize: function() {
     if(cg.config.autosize) {
       cg.config.width = window.innerWidth
       cg.config.height = window.innerHeight
       $(cg.canvas).attr({width: cg.config.width, height: cg.config.height})
     }
   },
   tick: function() {
    now = (new Date()).getTime()
    window.elapsed = now - cg.lastTime
    cg.lastTime = now

    requestAnimFrame(cg.tick)

     cg.autosize()

     cg.ctx.clearRect(0,0,cg.config.width,cg.config.height)

     if(cg.paused) {
       for(var i = 0; i < cg.circles.length; i++)
         if(cg.circles[i])
           if(cg.circles[i].render())
             i--
     } else {
       if(cg.circles.length < cg.maxCircles() && Math.random() < 0.25)
         cg.circles.push(new Circle())

       for(var i = 0; i < cg.circles.length; i++)
         if(cg.circles[i])
           if(cg.circles[i].tick())
             i--
     }
     if(typeof(cg.player) != 'undefined' && cg.player)
       cg.player.tick()

     cg.dispText()

   },
   touchMove: function(e) {
     e.preventDefault()
     var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
     cg.mouseMove(touch)
   },
   mouseMove: function(e) {
     if(!cg.paused) {
       cg.player.x = e.clientX
       cg.player.y = e.clientY
     }
   },
   dispText: function() {
     this.ctx.font = '40pt Verdana'
     this.ctx.fillStyle = 'white'
     w = this.ctx.measureText(t = 'Eat smaller Circles').width
     this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 - 100)

     w = this.ctx.measureText(t = 'Avoid bigger Circles').width
     this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 - 40)

     this.ctx.font = '20pt Verdana'
     w = this.ctx.measureText(t = '(click to begin)').width
     this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2)

     w = this.ctx.measureText(t = 'Agario.sx').width
     this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 + 180)

     this.zHeight = 81
     this.zWidth = 296
     this.ctx.drawImage(this.z, this.zLogoX = (cg.config.width - this.zWidth) / 2, this.zLogoY = cg.config.height / 2 + 200) //296x81
   }
 }
 var Circle = function(inCenter) {
   min = cg.config.circle.minRadius
   max = cg.config.circle.maxRadius

   if(typeof(cg.player) != 'undefined' && cg.player) {
     if(min < cg.player.radius - 35)
       min = cg.player.radius - 35
     if(max < cg.player.radius + 15)
       max = cg.player.radius + 15
   }
   this.radius = rand(min,max,cg.config.circle.radiusInterval)
   this.color = cg.config.circle.colors[Math.floor(Math.random() * cg.config.circle.colors.length)]

   if(inCenter) {
     this.x = Math.random() * cg.config.width
     this.y = Math.random() * cg.config.height
     this.vx = Math.random() - .5
     this.vy = Math.random() - .5
   } else {
     r = Math.random()
     if(r <= .25) {
       this.x = 1 - this.radius
       this.y = Math.random() * cg.config.height
       this.vx = Math.random()
       this.vy = Math.random() - .5
     } else if(r > .25 && r <= .5) {
       this.x = cg.config.width + this.radius - 1
       this.y = Math.random() * cg.config.height
       this.vx = - Math.random()
       this.vy = Math.random() - .5
     } else if(r > .5 && r <= .75) {
       this.x = Math.random() * cg.config.height
       this.y = 1 - this.radius
       this.vx = Math.random() - .5
       this.vy = Math.random()
     } else {
       this.x = Math.random() * cg.config.height
       this.y = cg.config.height + this.radius - 1
       this.vx = Math.random() - .5
       this.vy = - Math.random()
     }
   }
   this.vx *= cg.config.circle.speedScale
   this.vy *= cg.config.circle.speedScale
   if(Math.abs(this.vx) + Math.abs(this.vy) < 1) {
     this.vx = this.vx < 0 ? -1 : 1
     this.vy = this.vy < 0 ? -1 : 1
   }

   this.tick = function() {
     if(!this.inBounds()) {
       for(var i = 0; i < cg.circles.length; i++)
         if(cg.circles[i].x == this.x && cg.circles[i].y == this.y) {
           cg.circles.splice(i,1)
           return true
         }
     } else {
       this.move()
       this.render()
     }
   }

   this.inBounds = function() {
     if(this.x + this.radius < 0 ||
        this.x - this.radius > cg.config.width ||
        this.y + this.radius < 0 ||
        this.y - this.radius > cg.config.height)
       return false
     else
       return true
   }

   this.move = function() {
     this.x += this.vx * elapsed / 15
     this.y += this.vy * elapsed / 15
   }

   this.render = function() {
     cg.ctx.beginPath()
     cg.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
     cg.ctx.fillStyle = this.color
     cg.ctx.closePath()
     cg.ctx.fill()
   }

   this.render()
 }
 var Player = function() {
   this.x = cg.config.width / 2
   this.y = cg.config.height / 2
   this.color = 'white'
   this.radius = cg.config.circle.playerRadius
   this.tick = function() {
     this.detectCollision()
     this.render()
   }
   this.detectCollision = function() {
     for(var i = 0; i < cg.circles.length; i++) {
       circle = cg.circles[i]
       dist = Math.pow(Math.pow(circle.x - this.x,2) + Math.pow(circle.y - this.y,2),.5)
       if(dist < circle.radius + this.radius) {
         if(circle.radius > this.radius) {
           cg.death()
         } else {
           this.radius++
           cg.circles.splice(i,1)
           i--
         }
       }
     }
   }
   this.render = function() {
     cg.ctx.beginPath()
     cg.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
     cg.ctx.fillStyle = '#fff'
     cg.ctx.closePath()
     cg.ctx.fill()

 /*    cg.ctx.font = this.radius + 'pt Verdana'
     cg.ctx.fillStyle = 'black'
     w = cg.ctx.measureText(t = this.radius).width
     cg.ctx.fillText(t, this.x - w / 2, this.y + this.radius  / 2)*/
   }
 }
