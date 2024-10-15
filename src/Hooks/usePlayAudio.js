import { useEffect, useRef, useState } from "react";

function usePlayAudio() {
  let audioRef = useRef(null);

  let [playPodcast, setPlayPodcast] = useState(false);
  let [pausePodcast, setPausePodcast] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);
      currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);

      currentAudio.addEventListener("ended", () => {
        setPlayPodcast(false);
        setPausePodcast(true);
      });

      return () => {
        currentAudio.removeEventListener("timeupdate", handleTimeUpdate);
        currentAudio.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );

        currentAudio.removeEventListener("ended", () => {
          setPlayPodcast(false);
          setPausePodcast(true);
        });
      };
    }
  }, []);

  let playAudio = () => {
    setPlayPodcast(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 1000);
    setPausePodcast(false);
  };
  let pauseAudio = () => {
    audioRef.current.pause();
    setPausePodcast(true);
  };
  let closeAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlayPodcast(false);
  };

  const Backward = () => {
    if (audioRef.current) {
      let newTime = Math.max(currentTime - 10, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const Forward = () => {
    if (audioRef.current) {
      let newTime = Math.min(currentTime + 10, duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleChange = (e) => {
    if (audioRef.current) {
      const newTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return {
    playPodcast,
    pausePodcast,
    currentTime,
    duration,
    formatTime,
    handleTimeUpdate,
    handleLoadedMetadata,
    playAudio,
    pauseAudio,
    closeAudio,
    Backward,
    Forward,
    handleChange,
    audioRef,
  };
}

export default usePlayAudio;
