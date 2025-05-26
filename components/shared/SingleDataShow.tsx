import { ReactElement } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import EpisodeNames from "../module/episode/episodesName";

const SingleDataShow = ({
  value,
  item,
  name,
  link = false,
  id,
}: {
  value: string;
  item: ReactElement;
  name: string;
  link?: boolean;
  id?: number | undefined;
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #15BFFDB3, #71a546b3)",
        borderRadius: "12px",
      }}
      className="relative min-w-24 md:min-w-40 p-[1px]"
    >
      <div
        style={{
          borderRadius: "11px",
        }}
        className="overflow-hidden p-4 bg-[#191D29]/90 backdrop-blur-md text-white flex flex-col gap-1"
      >
        <p className="text-lg md:text-3xl">{item}</p>
        <p
          style={{ fontFamily: "TTTravels", fontWeight: 400 }}
          className="text-xs md:text-sm"
        >
          {name}
        </p>
        <div className="flex justify-between">
          <div
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#15BFFD transparent",

            }}
            className="text-base md:text-xl max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
          >
            {id ? <EpisodeNames id={id} /> : value}
          </div>
          {link ? (
            <FaExternalLinkAlt className="hover:cursor-pointer" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleDataShow;
