const request = require('request')

const climatic = ( lat , long , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d247ffd716c848ce51c7b56cd7cb636a&query='+lat+','+long+'&units=f'
    request( { url: url, json: true}, (error, response) =>{
        if(error){
            callback('No internet', undefined)
        }
        else if(response.status==="OK"){
            callback('location not found', undefined )
        }
        else{
            callback(undefined ,'humidity is '+response.body.current.humidity)
           // const climaticData = JSON.parse(response.data)
           // callback( undefined, 'cloud data is '+JSON.stringify(response.data))
        }
    })
}


climatic( 12.9 , 77.6, (error, data) => {
    console.log('error : ', error)
    console.log('data : ', data)
    })