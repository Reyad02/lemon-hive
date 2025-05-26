import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import { getAllLocations } from "../services/locations";
import Locations from "@/components/module/location";
import { getAllEpisodes } from "../services/episodes";
import Episodes from "@/components/module/episode";
import { getAllCharacter } from "../services/characters";
import Characters from "@/components/module/character";
import Link from "next/link";

export default async function Home() {
  const { results: locations } = await getAllLocations();
  const { results: episodes } = await getAllEpisodes();
  const { results: characters } = await getAllCharacter();
  return (
    <div className="">
      <div style={{ fontFamily: "TTTravels", fontWeight: 800 }} className="">
        <div className="flex mb-4 gap-4 max-w-5xl mx-auto relative items-baseline-last">
          <Image
            src={"/Image resource/bubble.png"}
            alt="portal"
            width={190}
            height={20}
            className="absolute -top-2/3 -left-1/8 lg:-left-1/8 lg:-top-1/2 w-[80px] md:w-[190px] "
          />
          <h1
            style={{
              fontFamily: "TTTravels",
              fontStyle: "italic",
              fontWeight: 700,
            }}
            className="text-3xl md:text-4xl lg:text-9xl z-20 text-[#FFFFFF]"
          >
            THE
          </h1>
          <Image
            src={"/Image resource/portal.png"}
            alt="portal"
            width={190}
            height={20}
            className="w-[60px]  md:w-[190px]"
          />
          <h1
            className="text-3xl md:text-4xl lg:text-9xl  text-transparent relative bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(145.33deg, rgb(157, 254, 0), rgb(20, 217, 230))",
            }}
          >
            <div className="absolute rounded-4xl md:w-12 md:h-2 right-0 -top-2 bg-[linear-gradient(to_right,_#9DFE00_9%,_#14D9E6_94%)]"></div>
            RICK &
          </h1>
        </div>

        <div className="flex gap-4  max-w-5xl mx-auto relative  items-end">
          <h1 className="text-3xl md:text-4xl lg:text-9xl text-[#FFFFFF]">
            <span className="bg-gradient-to-r from-[#4EE984] to-[#1BDBDA] text-transparent bg-clip-text">
              MORTY
            </span>{" "}
            <span
              style={{
                fontFamily: "TTTravels",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              WIKI
            </span>
          </h1>
          <Image
            src={"/Image resource/Gun.png"}
            alt="portal"
            width={300}
            height={20}
            className="absolute -right-1/10 md:-right-1/5 -top-[75%] w-[180px] md:w-[300px]"
          />
        </div>
      </div>

      <div
        style={{
          fontFamily: "TTTravels",
          fontWeight: 600,
        }}
        className="flex flex-col-reverse md:flex-row items-start md:justify-center md:items-center gap-8 md:gap-16 mt-6"
      >
        <a
          target="_blank"
          href={"https://www.youtube.com/watch?v=KQ9Cgdsa9tc"}
          className="text-[#FBF8F3] outline-none border-none shadow-none md:px-6 md:py-5 btn text-sm md:text-xl font-medium rounded-3xl bg-[linear-gradient(145.33deg,_rgb(157,_254,_0)_-10.502%,_rgb(20,_217,_230)_95.859%)] flex items-center"
        >
          <FaRegPlayCircle /> Watch Now
        </a>
        <p className="text-[10px] md:text-sm max-w-[200px]  md:max-w-[370px] text-[#14D9E6]">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>

      <div className="flex flex-row items-center justify-between px-4 py-6 md:py-8 text-white  mt-6 md:mt-24 mb-5 md:mb-8">
        <p
          style={{
            fontFamily: "TTTravels",
            fontWeight: 500,
          }}
          className="text-white text-lg md:text-2xl "
        >
          Meet the cast
        </p>
        <Link
          style={{
            fontFamily: "TTTravels",
            fontWeight: 400,
          }}
          href="/cast"
          className="text-white text-sm md:text-base outline-1 outline-[#9dfe00] rounded-lg py-1.5 px-4 md:px-6 md:py-2.5 transition"
        >
          View All
        </Link>
      </div>
      <Characters characters={characters} />

      <p
        style={{
          fontFamily: "TTTravels",
          fontWeight: 500,
        }}
        className="text-white md:text-2xl mt-6 md:mt-24 mb-5 md:mb-8"
      >
        Episodes
      </p>
      <Episodes episodes={episodes} />

      <p
        style={{
          fontFamily: "TTTravels",
          fontWeight: 500,
        }}
        className="text-white md:text-2xl mt-6 md:mt-24 mb-5 md:mb-8"
      >
        Locations
      </p>
      <Locations locations={locations} />
    </div>
  );
}
