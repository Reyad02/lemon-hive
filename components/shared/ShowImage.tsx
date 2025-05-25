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
      style={{
        background: "linear-gradient(to bottom right, #71a546b3, #15BFFDB3)",
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
        borderRadius: "12px",
      }}
      className="relative w-fit p-[2px]"
    >
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
          borderRadius: "10px",
        }}
        className="overflow-hidden p-4 bg-[#191D29]/90 backdrop-blur-md"
      >
        <Image
          src={imageSrc}
          alt="character"
          width={260}
          height={220}
          className="object-cover rounded-md"
        />
        <p className="mt-6 text-[10px] md:text-base text-white">{value}</p>
      </div>
    </div>
  );
};

export default ShowImage;
