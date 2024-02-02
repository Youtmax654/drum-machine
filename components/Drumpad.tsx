"use client";

import { useEffect } from "react";

type DrumpadProps = {
  id: string;
  src: string;
  keycaps: string;
};

const Drumpad = (props: DrumpadProps) => {
  const playSound = () => {
    const sound = document.getElementById(props.keycaps) as HTMLAudioElement;
    const display = document.getElementById("display") as HTMLDivElement;
    sound.currentTime = 0;
    sound.play();
    display.innerText = props.id;
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key.toUpperCase() === props.keycaps) {
        playSound();
      }
    });
  });

  return (
    <div
      className="drum-pad w-[100px] leading-[80px] bg-gray-500 shadow-lg cursor-pointer hover:bg-gray-600 text-center align-middle font-extrabold rounded-md"
      id={props.id}
      onClick={() => playSound()}
    >
      <audio className="clip" src={props.src} id={props.keycaps}></audio>
      <p>{props.keycaps}</p>
    </div>
  );
};

export default Drumpad;
