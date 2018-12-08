'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const listEvents = require('./listings/events.js')
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // listing requests below
  $('#get-listings').on('click', listEvents.onGetList)
  $('#create-listing').on('click', listEvents.onCreateList)
  $('#update-listing').on('click', listEvents.onUpdateList)
  $('destroy-listing').on('click', listEvents.onDestroyList)
})
