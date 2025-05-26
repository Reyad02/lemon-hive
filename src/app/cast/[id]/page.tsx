import SingleDataShow from "@/components/shared/SingleDataShow";
import { getSingleCharacter } from "@/src/services/characters";
import Image from "next/image";
import { RiHeart2Fill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import { IoMdMale } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { PiWebcamFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const SingleCast = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const results = await getSingleCharacter(id);
  return (
    <div className="relative mx-auto md:pl-30 gap-10 md:gap-0 text-white flex flex-col md:flex-row  md:items-center">
      <span
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#1F2D2E",
          fontFamily: "TTTravels",
          fontWeight: 800,
        }}
        className="absolute hidden md:block -left-1/4 w-fit ml-0 pl-0 rotate-270  text-transparent text-8xl text-nowrap "
      >
        {results?.name}
      </span>
      <div className="text-center ">
        <p
          style={{ fontFamily: "TTTravels", fontWeight: 600 }}
          className="text-[#14D9E6] text-2xl md:text-4xl mb-6 text-nowrap"
        >
          {results?.name}
        </p>
        <div
          style={{
            background:
              "linear-gradient(to bottom right, #15BFFDB3, #71a546b3)",
            borderRadius: "12px",
          }}
          className="relative p-[1px]"
        >
          <div
            style={{
              borderRadius: "11px",
            }}
            className="overflow-hidden p-8 bg-[#191D29]/90 backdrop-blur-md"
          >
            <Image
              src={results?.image}
              alt="character"
              width={300}
              height={300}
              className="w-[300px] rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <hr className="rotate-90 bg-gradient-to-b from-[#9DFE00] to-[#14D9E6] h-[1px] w-[200px] border-0" />
      </div>

      <div
        style={{ fontFamily: "TTTravels", fontWeight: 600 }}
        className="flex flex-col gap-10"
      >
        <div className="flex items-center justify-between gap-10">
          <div>
            <SingleDataShow
              value={results?.status}
              name={"Status"}
              item={<RiHeart2Fill />}
            />
          </div>
          <div>
            <SingleDataShow
              value={results?.species}
              name={"Species"}
              item={<DiAndroid />}
            />
          </div>
          <div>
            <SingleDataShow
              value={results?.gender}
              name={"Gender"}
              item={<IoMdMale />}
            />
          </div>
        </div>

        <div>
          <SingleDataShow
            value={results?.origin?.name}
            name={"Origin"}
            item={<BiWorld />}
          />
        </div>
        <div>
          <SingleDataShow
            value={results?.location?.name}
            name={"Last Known Location"}
            item={<PiWebcamFill />}
          />
        </div>
        <div>
          <SingleDataShow
            value={results?.location?.name}
            name={"Episode(s)"}
            item={<GiHamburgerMenu />}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCast;
