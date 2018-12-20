'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetListing = (event) => {
  event.preventDefault()
  api.getListing(getFormFields(event.target))
    .then(ui.getListingSuccess)
    .catch(ui.failure)
}
const onCreateListing = (event) => {
  event.preventDefault()
  api.createListing(getFormFields(event.target))
    .then(ui.createListingSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onUpdateListing = (event) => {
  event.preventDefault()
  const listingData = getFormFields(event.target)
  // console.log('data is ', listingData)

  listingData.id = $(event.target).closest('section').data('id')
  api.updateListing(listingData)
    .then(ui.updateListingSuccess)
    .then(() => onGetListing(event))
    .catch(ui.failure)
}
const onDestroyListing = (event) => {
  event.preventDefault()
  const listingId = $(event.target).closest('section').data('id')
  api.destroyListing(listingId)
    .then(() => onGetListing(event))
    .then(ui.destroyListingSuccess)
    .catch(ui.failure)
}
const onCancel = () => {
  $('.update-listing-form').trigger('reset')
}
const listHandlers = () => {
  $('#get-listings').on('click', onGetListing)
  $('#create-listing').on('submit', onCreateListing)
  $('.content').on('click', '.update-listing', (event) => {
    const id = $(event.target).data('id')
    $('#myModal-' + id).modal('show')
  })
  $('.content').on('hidden.bs.modal', onCancel)
  $('.content').on('submit', '.update-listing-form', onUpdateListing)
  $('.content').on('click', '.delete-listing', onDestroyListing)
}

module.exports = {
  onGetListing,
  onCreateListing,
  onUpdateListing,
  onDestroyListing,
  listHandlers
}
