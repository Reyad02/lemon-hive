import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import { getAllLocations } from "../services/locations";
import Locations from "@/components/module/location";

export default async function Home() {
  const { results } = await getAllLocations();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-7">
        <div className="flex mb-4 gap-4 max-w-5xl mx-auto relative items-baseline-last">
          <Image
            src={"/Image resource/bubble.png"}
            alt="portal"
            width={190}
            height={20}
            className="absolute -left-1/8 -top-1/2"
          />
          <h1 className="text-9xl z-20 text-[#FFFFFF]">THE</h1>
          <Image
            src={"/Image resource/portal.png"}
            alt="portal"
            width={190}
            height={20}
          />
          <h1
            className="text-9xl  text-transparent relative bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(145.33deg, rgb(157, 254, 0), rgb(20, 217, 230))",
            }}
          >
            <div className="absolute rounded-4xl w-12 h-2 right-0 bg-[linear-gradient(to_right,_#9DFE00_9%,_#14D9E6_94%)]"></div>
            RICK &
          </h1>
        </div>

        <div className="flex gap-4  max-w-5xl mx-auto relative  items-end">
          <h1 className="text-9xl text-[#FFFFFF]">
            <span className="bg-gradient-to-r from-[#4EE984] to-[#1BDBDA] text-transparent bg-clip-text">
              MORTY
            </span>{" "}
            WIKI
          </h1>
          <Image
            src={"/Image resource/Gun.png"}
            alt="portal"
            width={300}
            height={20}
            className="absolute -right-1/8 -top-[75%] "
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-16">
        <button className="text-[#FBF8F3] outline-none border-none shadow-none px-6 py-5 btn text-xl font-medium rounded-3xl bg-[linear-gradient(to_right,_#9DFE00_20%,_#14D9E6_100%)] flex items-center">
          <FaRegPlayCircle /> Watch Now
        </button>
        <p className="text-sm max-w-xs text-[#14D9E6]">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>

        <p className="text-white text-2xl mb-9">Locations</p>
      <Locations locations={results} />
    </div>
  );
}
