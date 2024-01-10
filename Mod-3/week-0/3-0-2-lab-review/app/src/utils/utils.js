export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // If the response status is not ok (e.g., 404 or 500), throw an error
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw the error to propagate it further if needed
  }
};