 const request=require('request');
 const yargs=require('yargs');
 const geocode=require('./geocode/geocode');
 const weather=require('./weather/weather');

 const argv=yargs
     .option({
         a:{
             demand: true,
             alias: 'address',
             describe: 'Address to fetch weather for',
             string : true
         }
     })
     .help()
     .alias('help','h')
     .argv;

  geocode.geocodeAddress(argv.address,(errorMessage,results)=> {
      if(errorMessage){
          console.log(errorMessage);
      }else{
          console.log(results.address);
           weather.getWeather(results.latitude,results.longitute,(errorMessage,weatherResults)=> {
             if(errorMessage){
                 console.log(errorMessage);
             }else{
                 console.log(`It is currently ${weatherResults.temprature} . but feels like ${weatherResults.apparentTemprature}`);
             }
         });   
      }
  });   


 
