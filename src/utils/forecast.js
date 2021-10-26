const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6f205812414e54bd185e58abe83d24f5&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
    if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined)
    } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out there but it feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast;

