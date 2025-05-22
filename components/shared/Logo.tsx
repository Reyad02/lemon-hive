import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={"/Image resource/Logo.png"}
        alt="Logo"
        width={227}
        height={47}
      />
    </div>
  );
};

export default Logo;
