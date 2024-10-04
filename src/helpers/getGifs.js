export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7fpO3QHNs9h3xmzepMNyB8Fk1uYlh5ly&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}