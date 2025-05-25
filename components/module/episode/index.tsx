"use client";

import ShowData from "@/components/shared/ShowData";
import CustomSlider from "@/components/shared/Slider";
import { useScreenSize } from "@/src/hooks/useScreen";
import { IEpisode } from "@/src/types/episodes";

const Episodes = ({ episodes }: { episodes: IEpisode[] }) => {
  const width = useScreenSize();

  return (
    <CustomSlider
      items={episodes}
      slidesPerView={width < 768 ? 2 : 4}
      useFor="episodes"
      renderSlide={(episode) => (
        <ShowData
          uniqueIdentifier={String(episode?.episode)}
          value={episode?.name}
        />
      )}
    />
  );
};

export default Episodes;
