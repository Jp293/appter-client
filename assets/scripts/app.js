'use strict'

const authEvents = require('./auth/events.js')
const listEvents = require('./listings/events.js')
const guestEvents = require('./guests/events.js')
$(() => {
  authEvents.authHandlers()
  listEvents.listHandlers()
  guestEvents.guestHandlers()
})
