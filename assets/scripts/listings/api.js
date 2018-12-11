'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getListing = (listingData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/listings',
    headers: {
      // might need to change to store.current_user.token [watch]
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(listingData)
  })
}

const createListing = (listingData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/listings',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(listingData)

  })
}

const updateListing = (listingData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/listings/${listingData}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(listingData)
  })
}

const destroyListing = (listingData) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/listings/${listingData}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(listingData)
  })
}
module.exports = {

  getListing,
  createListing,
  updateListing,
  destroyListing
}
