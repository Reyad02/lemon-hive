import Image from "next/image";

const ShowImage = ({
  imageSrc,
  value,
}: {
  imageSrc: string;
  value: string;
}) => {
  return (
    <div className="rounded-xl p-px bg-gradient-to-r from-[#71a546b3] to-[#15BFFDB3]">
      <div
        className="p-4 rounded-xl bg-[#191D29] text-white "
        style={{ clipPath: "polygon(100% 0, 100% 80%, 80% 100%, 0 100%, 0 0)" }}
      >
        <Image src={imageSrc} alt="character" width={260} height={220} />
        <p className="mt-6">{value}</p>
      </div>
    </div>
  );
};

export default ShowImage;
