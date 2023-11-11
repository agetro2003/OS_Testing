const os = require('os');
const process = require('process');
// Calling process.cpuUsage() method 
const usage = process.cpuUsage(); 
const os2 = require('os-utils');


  os2.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
  });
  
  os2.cpuFree(function(v){
    console.log( 'CPU Free:' + v );
  });
  console.log(os.cpus())
  console.log('Memoria total con os (bytes): ',os.totalmem())
  console.log('Memoria libre con os (bytes): ',os.freemem())
  console.log('Memoria libre con os-utils (MB): ',os2.freemem())
  console.log('Memoria total con os-utils (MB): ',os2.totalmem())
// Printing returned value 
console.log(usage); 
