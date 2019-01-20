'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getGuest = (data) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/guests',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
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

const destroyGuest = (guestData, data) => {
  console.log(guestData, data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/guests/${guestData}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}
module.exports = {

  getGuest,
  createGuest,
  destroyGuest
}
