import { useEffect, useState } from "react";
import axios from "axios";

function useGetSingleData(id) {
  let [PodcastDetail, setPodcastDetails] = useState({});

  let fetchPodcastDetails = async () => {
    try {
      let response = await axios.get(
        `https://podcast-api-gh6v.onrender.com/get-podcast/${id}`
      );
      setPodcastDetails(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPodcastDetails();
  }, [id]);

  return PodcastDetail;
}
export default useGetSingleData;
