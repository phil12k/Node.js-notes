const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=d247ffd716c848ce51c7b56cd7cb636a&query=12.9716,77.5946'

request( { url: url, json: true}, (err, response) => {
  console.log('it currently ' +response.body.current.temperature+' celsius but it feels like '+response.body.current.feelslike
})