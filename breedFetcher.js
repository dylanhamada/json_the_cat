const request = require("request");

const userInput = process.argv[2];

const catReq = (cat) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${cat}`, (err, resp, body) => {
    // if there is a request error, print an error message and exit function
    if (err) {
      return console.log(`Error: ${err}`);
    }

    // if body is more than an empty array, parse it and print breed description
    if (body.length > 2) {
      const data = JSON.parse(body);
      return console.log(data[0].description);
    }

    // otherwise, print a message that the breed could not be found
    return console.log(`Sorry, the ${cat} breed cannot be found.`);
  });
};

catReq(userInput);