import SingleDataShow from "@/components/shared/SingleDataShow";
import { getSingleCharacter } from "@/src/services/characters";
import Image from "next/image";

const SingleCast = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const results = await getSingleCharacter(id);
  return (
    <div className="mx-auto flex flex-col md:flex-row gap-10 items-center text-white">
      <div className="hidden md:flex flex-col items-center justify-center">
        <p
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#1F2D2E",
            fontFamily: "TTTravels",
            fontWeight: 800,
          }}
          className="text-transparent text-6xl"
        >
          {results?.name}
        </p>
      </div>

      <div className="text-center">
        <p
          style={{ fontFamily: "TTTravels", fontWeight: 600 }}
          className="text-[#14D9E6] text-2xl md:text-4xl mb-6"
        >
          {results?.name}
        </p>
        <div
          style={{
            background:
              "linear-gradient(to bottom right, #15BFFDB3, #71a546b3)",
            borderRadius: "12px",
          }}
          className="p-[1px]"
        >
          <div
            style={{ borderRadius: "11px" }}
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

      <div className="hidden md:block h-full">
        <hr className="rotate-90 bg-gradient-to-b from-[#9DFE00] to-[#14D9E6] h-[1px] w-[200px] border-0" />
      </div>

      <div
        style={{ fontFamily: "TTTravels", fontWeight: 600 }}
        className="flex flex-col gap-10"
      >
        <div className="flex items-center justify-between gap-10">
          <SingleDataShow
            value={results?.status}
            name="Status"
            item={
              <Image src="/Status.svg" alt="Status" width={40} height={40} />
            }
          />
          <SingleDataShow
            value={results?.species}
            name="Species"
            item={
              <Image src="/Species.svg" alt="Species" width={40} height={40} />
            }
          />
          <SingleDataShow
            value={results?.gender}
            name="Gender"
            item={
              <Image src="/Gender.svg" alt="Gender" width={40} height={40} />
            }
          />
        </div>

        <SingleDataShow
          value={results?.origin?.name}
          name="Origin"
          item={<Image src="/origin.svg" alt="Origin" width={40} height={40} />}
          link
        />
        <SingleDataShow
          value={results?.location?.name}
          name="Last Known Location"
          item={
            <Image src="/Location.svg" alt="Location" width={40} height={40} />
          }
          link
        />
        <SingleDataShow
          value={results?.location?.name}
          name="Episode(s)"
          item={
            <Image
              src="/burger.svg"
              alt="Episode"
              className="w-8 h-5"
              width={36}
              height={36}
            />
          }
          id={id}
        />
      </div>
    </div>
  );
};

export default SingleCast;
