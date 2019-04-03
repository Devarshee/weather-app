const yargs=require('yargs');

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

var encodedAdd=encodeURIComponent(argv.address);
var geocodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`,
