"use client";

import ShowData from "@/components/shared/ShowData";
import CustomSlider from "@/components/shared/Slider";
import { useScreenSize } from "@/src/hooks/useScreen";
import { ILocation } from "@/src/types/location";

const Locations = ({ locations }: { locations: ILocation[] }) => {
  const width = useScreenSize();

  return (
    <CustomSlider
      items={locations}
      slidesPerView={width < 768 ? 2 : 4}
      useFor="locations"
      renderSlide={(location) => (
        <ShowData uniqueIdentifier={location?.id} value={location?.name} />
      )}
    />
  );
};

export default Locations;
