const ShowData = ({
  uniqueIdentifier,
  value,
}: {
  uniqueIdentifier: string | number;
  value: string;
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #71a546b3, #15BFFDB3)",
        clipPath: "polygon(0 0, 100% 0, 100% 81%, 80% 100%, 0 100%)",
        borderRadius: "12px",
      }}
      className="relative min-w-40 p-[2px]"
    >
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
          borderRadius: "10px",
        }}
        className="overflow-hidden p-4 bg-[#191D29]/90 backdrop-blur-md text-white "
      >
        <p className="text-[10px] md:text-xs">
          {typeof uniqueIdentifier === "string"
            ? uniqueIdentifier
            : `#${uniqueIdentifier}`}
        </p>
        <p className="text-sm md:text-lg">{value}</p>
      </div>
    </div>
  );
};

export default ShowData;
