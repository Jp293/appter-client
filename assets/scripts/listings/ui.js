'use strict'

const store = require('../store.js')

const failure = () => {
  $('#message').html('Something went wrong, try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {

  failure
}
