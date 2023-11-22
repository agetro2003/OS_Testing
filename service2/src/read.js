const pool = require("../dbConnection");
const getPCData = require("../pcData");
async function read(call, callback) {
  const tab = `tab${Math.floor(Math.random() * 3) + 1}`;
  const query = `SELECT * from ${tab};`;

  try {
    const data = await pool.query(query);
    const pcData = await getPCData();
    console.log(data.rows);
    console.log(tab); 
    console.log(pcData);

    callback(null, {
      data: data.rows,
      freeMem: pcData.ramFree,
      freeCPU: pcData.cpuFree,
      table: tab,
    });
  } catch (error) {
    callback(error);
  }
}

module.exports = read;
