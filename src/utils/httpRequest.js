// ! httpRequest make request from API
const httpRequest = async (url) => {
  try {
    // ! make a request with fetch
    const response = await fetch(url);

    // ! check if response has a false value
    if (!response.ok) {
      // ! throw new error object
      throw new Error("Something went wrong when loading your data!");
    }

    // ! parse and destructure the results array
    const { results } = await response.json();

    // ! return the results
    return results;
  } catch (err) {
    console.log(err);
  }
};

// ! export httpRequest function
export default httpRequest;
