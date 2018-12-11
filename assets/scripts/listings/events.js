'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store.js')
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
}
const onUpdateListing = (event) => {
  event.preventDefault()
  const listingData = getFormFields(event.target)
  api.updateListing(listingData)
    .then(() => onGetListing(event))
    .catch(ui.failure)
}
const onDestroyListing = (event) => {
  event.preventDefault()
  const listingId = $(event.target).closest('section').data('id')
  api.destroyListing(listingId)
    .then(() => onGetListing(event))
    .catch(ui.failure)
}
const listHandlers = () => {
  $('#get-listings').on('click', onGetListing)
  $('#create-listing').on('submit', onCreateListing)
  $('.content').on('submit', 'update-listing', onUpdateListing)
  $('.content').on('click', '.delete-listing', onDestroyListing)
}

module.exports = {
  onGetListing,
  onCreateListing,
  onUpdateListing,
  onDestroyListing,
  listHandlers
}
