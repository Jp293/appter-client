'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onChangePassword = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}
const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}
const authHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  authHandlers
}
