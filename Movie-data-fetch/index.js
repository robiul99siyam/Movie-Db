// treanding the current state of the tree and updating the
export async function getTrendingAllData() {
  try {
    const response = await fetch("http://localhost:3000/api/movie/trending");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getTredingById(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/movie/trending/${id}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// popular movies

export async function getPopularAllData() {
  try {
    const response = await fetch("http://localhost:3000/api/movie/popular");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function getTopRatedAllData() {
  try {
    const response = await fetch("http://localhost:3000/api/movie/top_rated");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
