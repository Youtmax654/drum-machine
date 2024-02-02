import Drumpad from "../components/Drumpad";

export default function Home() {
  const drumpads = [
    {
      id: "heater1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      key: "Q",
    },
    {
      id: "heater2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      key: "W",
    },
    {
      id: "heater3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      key: "E",
    },
    {
      id: "heater4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      key: "A",
    },
    {
      id: "clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      key: "S",
    },
    {
      id: "open-hh",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      key: "D",
    },
    {
      id: "kicknhat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      key: "Z",
    },
    {
      id: "kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      key: "X",
    },
    {
      id: "closed-hh",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      key: "C",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div
        id="drum-machine"
        className="flex flex-row items-center justify-evenly w-[700px] h-[350px] bg-gray-400 border-8 border-solid border-green-700 rounded-lg"
      >
        <div className="grid grid-cols-3 items-center gap-2 w-auto h-[240px]">
          {drumpads.map((drumpad) => (
            <Drumpad
              key={drumpad.key}
              id={drumpad.id}
              src={drumpad.src}
              keycaps={drumpad.key}
            />
          ))}
        </div>
        <p
          id="display"
          className="w-[200px] h-[50px] leading-[50px] bg-gray-500 rounded-lg text-center align-middle font-bold shadow-lg"
        ></p>
      </div>
      <p className="font-bold mt-2">By Maxime Penn</p>
    </div>
  );
}
