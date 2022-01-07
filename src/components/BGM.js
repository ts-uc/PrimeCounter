import { useEffect, useState } from "react";
import useSound from "use-sound";
import bgmSrc from "../assets/music-box-playing-pachelbel-canon-in-d-16.mp3";
export const BGM = () => {
  const [play, { stop }] = useSound(bgmSrc);
  const [bgmSwitch, setBgmSwitch] = useState(false);

  useEffect(() => {
    if (bgmSwitch) {
      play();
    }
    if (!bgmSwitch) {
      stop();
    }
  }, [bgmSwitch]);

  const handleChange = (e) => {
    setBgmSwitch(e.target.checked);
  };

  return (
    <div>
      <input type="checkbox" id="sound" name="sound" onChange={handleChange} />
      <label for="sound">{bgmSwitch ? "+" : "-"}SOUND</label>
    </div>
  );
};
