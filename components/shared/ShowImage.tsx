import Image from "next/image";

const ShowImage = ({
  imageSrc,
  value,
}: {
  imageSrc: string;
  value: string;
}) => {
  return (
    <div
      className="relative p-[2px] bg-gradient-to-r from-[#71a546b3] to-[#15BFFDB3]"
      style={{
        clipPath: "polygon(100% 0, 100% 80%, 80% 100%, 0 100%, 0 0)",
        borderRadius: "14px",
      }}
    >
      <div className="p-4 bg-[#191D29]/90 backdrop-blur-md text-white rounded-[12px]">
        <Image
          className="rounded-md"
          src={imageSrc}
          alt="character"
          width={260}
          height={220}
        />
        <p className="mt-6 text-[10px] md:text-base">{value}</p>
      </div>

      <div
        className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-gradient-to-r from-[#15BFFDB3] to-[#15BFFDB3] "
        style={{
          clipPath: "polygon(100% 11%, 23% 100%, 100% 100%)",
          borderRadius: "14px",
        }}
      />
    </div>
  );
};

export default ShowImage;
