import axios from "axios";
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export const fetchPhotos = async (query, page = 1, per_page = 20) => {
  const res = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
    params: { query, page, per_page },
  });
  return res.data;
};

export const fetchVideos = async (query, page = 1, per_page = 20) => {
  const res = await axios.get(`https://api.pexels.com/videos/search`, {
    headers: {
      Authorization: `${PEXELS_KEY}`,
    },
    params: { query, page, per_page },
  });
  return res.data.videos;
};

export const fetchGIFS = async (query, offset = 1, limit = 20) => {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: GIPHY_KEY,
      q: query,
      limit,
      offset,
    },
  });
  return res.data.data;
};
