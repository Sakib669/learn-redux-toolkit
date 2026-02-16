import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchGIFS, fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen text-white min-w-full bg-gray-950">
      <SearchBar />
      <Tabs />
    </div>
  );
}

export default App;
