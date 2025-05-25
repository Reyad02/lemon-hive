"use client";

import ShowData from "@/components/shared/ShowData";
import CustomSlider from "@/components/shared/Slider";
import { ILocation } from "@/src/types/location";

const Locations = ({ locations }: { locations: ILocation[] }) => {
  return (
    <CustomSlider
      items={locations}
      slidesPerView={4}
      useFor="locations"
      renderSlide={(location) => (
        <ShowData uniqueIdentifier={location?.id} value={location?.name} />
      )}
    />
  );
};

export default Locations;
