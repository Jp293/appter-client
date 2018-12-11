'use strict'

// const store = require('../store.js')
const renderListingsHandlebars = require('../templates/listing-listing.handlebars')
const createListingSuccess = (createListingResponse) => {
  $('#message').html('Listing Created')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const getListingSuccess = (data) => {
  console.log('test', data.listings)
  const renderContent = renderListingsHandlebars({listings: data.listings})
  $('.content').html(renderContent)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const updateListingSuccess = (data) => {
  console.log('test', data.listings)
  const renderContent = renderListingsHandlebars({listings: data.listings})
  $('#message').html('Listing Updated')
  $('#message').html(renderContent)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const destroyListingSuccess = (destroyListingResponse) => {
  $('#message').html('Listing Deleted')
  $('#message').addClass('sucess-message')
  $('#message').removeClass('error-message')
}

const failure = () => {
  $('#message').html('Something went wrong, try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {

  createListingSuccess,
  getListingSuccess,
  updateListingSuccess,
  destroyListingSuccess,
  failure
}
