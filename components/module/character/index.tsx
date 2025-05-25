"use client";

import ShowImage from "@/components/shared/ShowImage";
import CustomSlider from "@/components/shared/Slider";
import { ICharacter } from "@/src/types/characters";

const Characters = ({ characters }: { characters: ICharacter[] }) => {

  return (
    <CustomSlider
      items={characters}
      slidesPerView={4}
      useFor="character"
      renderSlide={(character) => (
        <ShowImage imageSrc={character?.image} value={character?.name} />
      )}
    />
  );
};

export default Characters;
