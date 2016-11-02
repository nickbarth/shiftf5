#!/usr/bin/env node

var http = require('http')
var WServer = require('ws')
var fsevents = require('fsevents')

var server = http.createServer(function(request,response){
  response.writeHeader(200, {'Content-Type': 'application/javascript'})
  response.write('(new WebSocket("ws://localhost:8800")).onmessage = function(evt) { location.reload() }')
  response.end()
})

var wss = new WServer.Server({ server: server })
var watcher = fsevents(process.cwd())

wss.on('connection', function(ws) {
  watcher.on('change', function(path, info) {
    try { ws.send('trigger_reload') }
    catch (e) { }
  })
})

watcher.start()
server.listen(8800, function() {
  console.log('Add This: <script src="http://localhost:8800/script.js"></script>')
})
