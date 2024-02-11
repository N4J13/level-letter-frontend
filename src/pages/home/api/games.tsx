

export const getPopularGames = async () => {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2021-01-01,2021-12-31&ordering=-rating`
    );
    const data = await response.json();
    return data;
}

export const getUpcomingGames = async () => {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added`
    );
    const data = await response.json();
    return data;
}

export const getActionGames = async () => {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2021-01-01,2021-12-31&genres=action&ordering=-rating`
    );
    const data = await response.json();
    return data;
}