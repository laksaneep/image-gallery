import React, { useState } from "react";

type Props = {
  photos: {
    filename: string;
    contents: string;
  }[];
};

// function encodeBase64(buffer) {
//   return Buffer.from(buffer).toString("base64");
// }

const GalleryGird = (props: Props) => {
  const [photoNameList, setPhotoNameList] = useState<string[]>([]);

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(8, 5vw)",
    gap: "1rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    paddingTop: 0,
  };

  const gridItemsStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <h1>Our Gallery</h1>
      <div style={gridStyles}>
        {props.photos &&
          props.photos.map(
            (
              photo: {
                filename: string;
                contents: string;
              },
              id: number
            ) => {
              // const base64Image = encodeBase64(photo.contents);
              // const resultPhoto = "data:image/png;base64,".concat(base64Image);]
              // setPhotoNameList([...photoNameList, photo.filename]);

              return (
                <div key={id} style={gridItemsStyles}>
                  <img
                    id="myimage"
                    src={`http://localhost:5002/uploads/${photo.filename}`}
                    alt="grid_image"
                  />
                  {/* <img id="myimage" src={resultPhoto} alt="grid_image" /> */}
                </div>
              );
            }
          )}
      </div>
    </>
  );
};

export default GalleryGird;
