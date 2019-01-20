'use strict'

const renderGuestsHandlebars = require('../templates/listing-listing.handlebars')
const createGuestSuccess = (createGuestResponse) => {
  $('#message').html('Guest Created')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const getGuestSuccess = (data) => {
  const renderContent = renderGuestsHandlebars({guests: data.guests})
  $('.content').html(renderContent)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const destroyGuestSuccess = (destroyGuestResponse) => {
  $('#message').html('Guest Deleted')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = () => {
  $('.modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').html('Something went wrong, try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {

  createGuestSuccess,
  getGuestSuccess,
  destroyGuestSuccess,
  failure
}
