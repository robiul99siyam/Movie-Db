export const topRatedMovideData = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`, // Replace with your actual API key
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending data:", error);
    return []; // Return an empty array or handle the error as needed
  }
};
