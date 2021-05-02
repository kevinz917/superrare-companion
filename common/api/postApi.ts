import axios from "axios";

export const fetchArtwork = async (assetId: number) => {
  try {
    const fetchedArtwork: any = await axios.get(
      `https://superrare.co/sr-json/v0/nfts/assets?asset_ids=${assetId}`
    );
    return fetchedArtwork.data[0];
  } catch (error) {}
};

export const fetchPosts = async (number: number, offset: number) => {
  try {
    const fetchedRawPosts = await axios.get(
      `https://superrare.co/sr-json/v0/nfts/events?limit=${number}&offset=${offset}&categories=artwork&event_types=creation`
    );

    let postList = [];
    const fetchData = fetchedRawPosts.data;

    for (const post of fetchData) {
      const returnObj: any = {};
      returnObj.event = post;
      const fetchedArtwork = await fetchArtwork(post.assetId);
      returnObj.artwork = fetchedArtwork;
      postList.push(returnObj);
    }

    return postList;
  } catch (error) {}
};
