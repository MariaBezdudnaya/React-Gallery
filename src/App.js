import Gallery from "./components/Gallery";
import {useState} from "react";

function App() {
  const [pos, setPos] = useState(0);

  return (
    <Gallery
      images={[
        "/images/nature1.jpg",
        "/images/nature2.jpg",
        "/images/nature3.jpg",
        "/images/nature1.jpg",
        "/images/nature2.jpg",
        "/images/nature3.jpg",
      ]}

      pos={pos}

      onPrev={() => {
        setPos(pos - 1);
      }}

      onNext={() => {
        setPos(pos + 1);
      }}
    />
  );
}

export default App;
