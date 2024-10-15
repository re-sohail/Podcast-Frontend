import { useEffect, useState } from "react";
import axios from "axios";

function useAllPodcast() {
  let [Podcast, setPodcast] = useState([]);

  let fetchPodcast = async () => {
    try {
      let response = await axios.get(
        "https://podcast-api-gh6v.onrender.com/get-podcast",
        {
          withCredentials: true,
        }
      );
      setPodcast(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPodcast();
  }, []);

  return Podcast;
}
export default useAllPodcast;
