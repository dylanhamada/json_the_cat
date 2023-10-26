const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, resp, body) => {
    // if there is a request error, print an error message and exit function
    if (err) {
      callback(err, null);
      return;
    }

    // if body is more than an empty array, parse it and print breed description
    if (body.length > 2) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
      return;
    } else {
      callback(null, `Sorry, that breed can't be found.`);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };