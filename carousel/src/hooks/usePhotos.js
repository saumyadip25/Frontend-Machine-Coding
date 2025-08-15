import image1 from "../images/image-01.jpg";
import image2 from "../images/image-02.jpg";
import image3 from "../images/image-03.jpg";
import image4 from "../images/image-04.jpg";
import image5 from "../images/image-05.jpg";
import image6 from "../images/image-06.jpg";

function usePhotos() {
  return {
    data: [
      {
        id: 1,
        url: image1,
        alt: "image1",
      },
      {
        id: 2,
        url: image2,
        alt: "image2",
      },
      {
        id: 3,
        url: image3,
        alt: "image3",
      },
      {
        id: 4,
        url: image4,
        alt: "image4",
      },
      {
        id: 5,
        url: image5,
        alt: "image5",
      },
      {
        id: 6,
        url: image6,
        alt: "image6",
      },
    ],
  };
}

export default usePhotos;
