import ShowImage from "@/components/shared/ShowImage";
import { getAllCharacter } from "@/src/services/characters";
import { ICharacter } from "@/src/types/characters";
import Link from "next/link";

const CastPage = async () => {
  const { results: characters } = await getAllCharacter();

  return (
    <>
      <p
        style={{ fontFamily: "TTTravels", fontWeight: 600 }}
        className="text-[#14D9E6] text-xl md:text-6xl text-base mb-10"
      >
        The Cast
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
        {characters.map((character: ICharacter) => (
          <Link key={character?.id} href={`/cast/${character?.id}`}>
            <ShowImage imageSrc={character?.image} value={character?.name} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CastPage;
