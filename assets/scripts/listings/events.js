'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetListing = (event) => {
  event.preventDefault()
  api.getGame(getFormFields(event.taget))
    .then(ui.onGetListingSuccess)
    .catch(ui.failure)
}
const onCreateListing = (event) => {
  event.preventDefault()
  api.createListing()
    .then(ui.onCreateListSuccess)
    .catch(ui.failure)
}

const listHandlers = () => {
  $('#get-listings').on('click', onGetListing)
  $('#create-listing').on('click', onCreateListing)
  // $('#update-listing').on('click', onUpdateListing)
  // $('destroy-listing').on('click', onDestroyListing)
}

module.exports = {
  onGetListing,
  onCreateListing,
  // onUpdateListing,
  // onDestroyListing,
  listHandlers
}
