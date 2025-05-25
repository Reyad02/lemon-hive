import { ReactElement } from "react";

const SingleDataShow = ({
  value,
  item,
  name,
}: {
  value: string;
  item: ReactElement;
  name: string;
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
        <p className="text-xs md:text-sm">{name}</p>
        <p className="text-base md:text-xl">{value}</p>
      </div>
    </div>
  );
};

export default SingleDataShow;
