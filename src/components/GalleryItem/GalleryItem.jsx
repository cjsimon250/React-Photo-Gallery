function GalleryItem({ item, getGalleryList }) {
  return (
    <>
      <img src={item.path}></img>
      <p>{item.description}</p>
      <p>Likes: {item.likes}</p>
    </>
  );
}

export default GalleryItem;
