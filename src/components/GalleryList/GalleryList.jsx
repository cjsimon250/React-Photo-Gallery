import GalleryItem from "../GalleryItem/GalleryItem";

//list
function GalleryList({ galleryItems, getGalleryList }) {
  return (
    <div id="galleryList">
      {galleryItems.map((item) => {
        return (
          <div key={item.id}>
            <GalleryItem getGalleryList={getGalleryList} item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;
