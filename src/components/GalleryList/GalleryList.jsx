import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryItems, getGalleryList }) {
  return (
    <>
      {galleryItems.map((item) => {
        return (
          <div key={item.id}>
            <GalleryItem getGalleryList={getGalleryList} item={item} />
          </div>
        );
      })}
    </>
  );
}

export default GalleryList;
