'use strict'

let apiUrl
const apiUrls = {
  development: 'http://localhost:4741',
  production: 'https://appter.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
