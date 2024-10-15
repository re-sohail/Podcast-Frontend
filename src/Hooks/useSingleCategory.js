import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useSingleCategory() {
  let { name } = useParams();
  let [PodcastCategory, setPodcastCategory] = useState({});

  let fetchPodcastCategory = async () => {
    try {
      let response = await axios.get(
        `https://podcast-api-gh6v.onrender.com/category/${name}`
      );
      setPodcastCategory(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPodcastCategory();
  }, [name]);

  return { PodcastCategory, name };
}
export default useSingleCategory;
