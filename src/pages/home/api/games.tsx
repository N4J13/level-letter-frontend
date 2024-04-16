

export const getPopularGames = async () => {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&dates=2023-10-06,${"2024-02-01"}&ordering=-rating&page_size=5`
    );
    const data = await response.json();
    return data;
}

export const getUpcomingGames = async () => {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added&page_size=5`
    );
    const data = await response.json();
    return data;
}
