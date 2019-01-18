'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const listEvents = require('./listings/events.js')
const guestEvents = require('./guests/events.js')
$(() => {
  authEvents.authHandlers()
  listEvents.listHandlers()
  guestEvents.guestHandlers()
})
