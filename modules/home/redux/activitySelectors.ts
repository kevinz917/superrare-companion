export const selectedPostSelector = (state: any) => {
  const { posts, selectedArtworkId } = state.activity;
  return posts.filter((post: any) => post.artwork.id === selectedArtworkId)[0];
};
