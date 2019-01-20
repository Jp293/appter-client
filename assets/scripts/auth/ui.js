'use strict'
const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
const failure = function (failureResponse) {
  $('#message').html('Something went wrong.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}
const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').html('You signed in successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#create-listing').removeClass('hidden')
  $('#get-listings').removeClass('hidden')
  $('#create-guest-form').removeClass('hidden')
}
const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You changed your password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
}
const signOutSuccess = function (signOutResponse) {
  $('#message').html('You signed out successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#create-listing').addClass('hidden')
  $('#get-listings').addClass('hidden')
  $('#create-guest-form').addClass('hidden')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  failure,
  changePasswordSuccess,
  signOutSuccess
}
