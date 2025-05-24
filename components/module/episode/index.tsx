"use client";

import ShowData from "@/components/shared/ShowData";
import CustomSlider from "@/components/shared/Slider";
import { IEpisode } from "@/src/types/episodes";

const Episodes = ({ episodes }: { episodes: IEpisode[] }) => {
  return (
    <CustomSlider
      items={episodes}
      slidesPerView={4}
      renderSlide={(episode) => (
        <ShowData uniqueIdentifier={String(episode?.episode)} value={episode?.name} />
      )}
    />
  );
};

export default Episodes;
