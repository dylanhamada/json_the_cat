const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Fetch error details: ${error}`);
  } else {
    console.log(desc);
  }
});