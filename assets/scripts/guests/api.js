'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getGuest = (guestData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/guests',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createGuest = (guestData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/guests',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(guestData)

  })
}

const destroyGuest = (guestData) => {
  console.log(guestData)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/listings/${guestData}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(guestData)
  })
}
module.exports = {

  getGuest,
  createGuest,
  destroyGuest
}
