const request=require('request');

var getWeather = (lat,lng,callback) =>{
    request({
        url:`https://api.darksky.net/forecast/81eb14a7e1fd63e2fdeef9c18c5dd005/${lat},${lng}`,
        json:true
    },(error,response,body) => {
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temprature:body.currently.temperature,
                apparentTemprature: body.currently.apparentTemprature
            });    
        }else{
            callback("Unable to fetch weather");
        }
    });
};

module.exports.getWeather=getWeather;