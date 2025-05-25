import ShowImage from "@/components/shared/ShowImage";
import { getAllCharacter } from "@/src/services/characters";
import { ICharacter } from "@/src/types/characters";

const CastPage = async () => {
  const { results: characters } = await getAllCharacter();

  return (
    <>
      <p className="text-[#14D9E6] md:text-6xl text-base mb-10">The Cast</p>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
        {characters.map((character: ICharacter) => (
          <ShowImage
            key={character?.id}
            imageSrc={character?.image}
            value={character?.name}
          />
        ))}
      </div>
    </>
  );
};

export default CastPage;
