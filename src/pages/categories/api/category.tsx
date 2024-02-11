export const getGamesbyCategory = async (category: string) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2021-01-01,2021-12-31&genres=${category}&ordering=-rating`
  );
  const data = await response.json();
  return data;
};
