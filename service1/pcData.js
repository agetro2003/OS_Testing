const os = require('os-utils');
function getCpuFree() {
    return new Promise((resolve, reject) => {
      os.cpuFree(function (v) {
        if (v !== undefined) {
          resolve(v);
        } else {
          reject(new Error('Error al obtener la información de la CPU'));
        }
      });
    });
  }

const getPCData = async()=>{
  let cpuFree
  try {
    cpuFree = await getCpuFree();
    return {
        cpuFree: cpuFree,
        ramFree: os.freemem(),
      }
   } catch (error) {
     return error
   }
} 

module.exports = getPCData

  

