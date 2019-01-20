'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetGuest = (event) => {
  event.preventDefault()
  const listingId = $(event.target).closest('.listing-section').data('id')
  const data = { guest: { listing_id:
     listingId }}
  api.getGuest(data)
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
  // Closest section id becomes the guest id.
  const guestId = $(event.target).closest('.guest-section').data('id')
  const listingId = $(event.target).closest('.listing-section').data('id')
  const data = { guest: { listing_id:
     listingId }}
  console.log($(event.target).closest('.guest-section'))
  api.destroyGuest(guestId, data)
    // .then(() => api.getGuest(data))
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
