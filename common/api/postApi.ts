import axios from "axios";

export const fetchPosts = async (number: number, offset: number) => {
  try {
    const fetchedRawPosts = await axios.get(
      `https://superrare.co/sr-json/v0/nfts/events?limit=${number}&offset=${offset}&categories=artwork`
    );
    console.log(fetchedRawPosts);
    return fetchedRawPosts;
  } catch (error) {}
};
