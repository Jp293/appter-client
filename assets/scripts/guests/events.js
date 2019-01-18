'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetGuest = (event) => {
  event.preventDefault()
  api.getGuest(getFormFields(event.target))
    .then(ui.getGuestSuccess)
    .catch(ui.failure)
}
const onCreateGuest = (event) => {
  event.preventDefault()
  api.createGuest(getFormFields(event.target))
    .then(ui.createGuestSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onDestroyGuest = (event) => {
  event.preventDefault()
  const guestId = $(event.target).closest('section').data('id')
  api.destroyGuest(guestId)
    .then(() => onGetGuest(event))
    .then(ui.destroyGuestSuccess)
    .catch(ui.failure)
}
const guestHandlers = () => {
  $('.content').on('click', '.get-guests', onGetGuest)
  $('#create-guest-form').on('submit', onCreateGuest)
  $('.content').on('click', '.delete-guests', onDestroyGuest)
}

module.exports = {
  onGetGuest,
  onCreateGuest,
  onDestroyGuest,
  guestHandlers
}
