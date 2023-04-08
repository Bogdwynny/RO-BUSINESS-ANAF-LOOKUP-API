// Import dependencies
const axios = require('axios');

async function lookup(id) {
    try {
      const response = await axios.get(`https://anaf-api.node.xfr.dev/lookup/data?id=${id}`);
      // Handle the response data
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the request
      throw error;
    }
}
  
module.exports = { lookup }