const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    // Throw an error if the response was not 2xx
    if (!response.ok) throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)

    // Check the content type to determine how to parse the response. Then, return a tuple: [data, error]
    const contentType = response.headers.get('content-type');
    if (contentType !== null && contentType.includes('application/json')) {
      const jsonData = await response.json();
      return [jsonData, null]
    } else {
      const textData = await response.text();
      return [textData, null]
    }
  }
  catch (error) {
    // if there was an error, log it and return a tuple: [data, error]
    console.error(error.message);
    return [null, error];
  }
}

module.exports = fetchData; // Default Export
