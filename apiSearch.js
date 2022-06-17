const apiSearch = async (category) => {
  const url = `https://api.chucknorris.io/jokes/${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

module.exports = apiSearch;