const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);

    if (data[0] === undefined) {
      return callback('THATS NOT A KITTY', null);
    } else {
      return callback(null, data[0].description);
    }
  });
};


module.exports = {
  fetchBreedDescription
};

