'use strict'

// const store = require('../store.js')
const createListingSuccess = (createListResponse) =>
  $('#message').html('Listing Created')
$('#message').addClass('sucess-message')
$('message').removeClass('error-message')

const getListingSuccess = (getListingResponse) =>
$('#message').html('Listings')
$('#message').addClass('sucess-message')
$('message').removeClass('error-message')


const failure = () => {
  $('#message').html('Something went wrong, try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {

  createListingSuccess,
  getListingSuccess,
  failure
}
