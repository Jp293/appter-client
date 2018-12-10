'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetListing = (event) => {
  event.preventDefault()
  api.getGame(getFormFields(event.taget))
    .then(ui.getListingSuccess)
    .catch(ui.failure)
}
const onCreateListing = (event) => {
  event.preventDefault()
  api.createListing(getFormFields(event.target))
    .then(ui.createListSuccess)
    .catch(ui.failure)
}

const listHandlers = () => {
  $('#get-listings').on('click', onGetListing)
  $('#create-listing').on('submit', onCreateListing)
  // $('#update-listing').on('click', onUpdateListing)
  // $('destroy-listing').on('click', onDestroyListing)
}

module.exports = {
  getListing,
  createListing,
  // onUpdateListing,
  // onDestroyListing,
  listHandlers
}
