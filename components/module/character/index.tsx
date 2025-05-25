"use client";

import ShowImage from "@/components/shared/ShowImage";
import CustomSlider from "@/components/shared/Slider";
import { useScreenSize } from "@/src/hooks/useScreen";
import { ICharacter } from "@/src/types/characters";

const Characters = ({ characters }: { characters: ICharacter[] }) => {
  const width = useScreenSize();

  return (
    <CustomSlider
      items={characters}
      slidesPerView={width < 768 ? 2 : 4}
      useFor="character"
      renderSlide={(character) => (
        <ShowImage imageSrc={character?.image} value={character?.name} />
      )}
    />
  );
};

export default Characters;
