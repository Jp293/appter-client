'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getListing = (listingData) => {
  console.log(listingData)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/listings',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
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
    url: config.apiUrl + `/listings/${listingData.id}`,
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
