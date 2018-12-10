'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getListing = (inputData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/listings',
    headers: {
      // might need to change to store.current_user.token [watch]
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const createListing = (inputData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/listings',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

module.exports = {

  getListing,
  createListing
}
