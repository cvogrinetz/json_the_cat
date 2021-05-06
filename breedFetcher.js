const request = require('request');
const args = process.argv.slice(2);


let catQuery = args[0];

const breedFetcher = () => {


  request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
    
    const data = JSON.parse(body);
    
    if (data.message) {
      console.log(data.message);
    }


    if (data[0] === undefined) {
      console.log('THATS NOT A KITTY,TRY AGAIN');
    } else {
      console.log(data[0].description);
    }

  });
};

breedFetcher();


