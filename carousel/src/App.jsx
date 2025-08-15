import usePhotos from "./hooks/usePhotos";
import Carousel from "./Carousel";

const App = () => {
  const { data } = usePhotos();

  return (
    <div>
      <Carousel imagesList={data} />
    </div>
  );
};

export default App;
