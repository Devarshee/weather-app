const request=require('request');

var geocodeAddress=(address,callback) => {
    var encodedAdd=encodeURIComponent(address);

    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`,
        json:true
    },(error,response,body)=>{
        if(error){
            console.log(error);
            //callback("Unable to connect to the server");
        }else if(body.status === 'ZERO_RESULTS'){
            callback("Unable to find the address");
        }else if(body.status === 'OK'){
            callback(undefined,{
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitute : body.results[0].geometry.location.lng
            });    
        }
    });
};

module.exports.geocodeAddress=geocodeAddress;