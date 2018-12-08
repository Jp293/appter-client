'use strict'

const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetList = (event) => {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetListSuccess)
    .catch(ui.failure)
}

module.exports = {

  onGetList
}
