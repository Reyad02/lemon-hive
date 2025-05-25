const ShowData = ({
  uniqueIdentifier,
  value,
}: {
  uniqueIdentifier: string | number;
  value: string;
}) => {
  return (
    <div
      className="relative p-[2px] bg-gradient-to-r from-[#71a546b3] to-[#15BFFDB3]"
      style={{
        clipPath: "polygon(100% 0, 100% 60%, 80% 100%, 0 100%, 0 0)",
        borderRadius: "14px",
      }}
    >
      <div className="p-4 bg-[#191D29]/90 backdrop-blur-md text-white rounded-[12px]">
        <p className="text-xs">
          {typeof uniqueIdentifier === "string"
            ? uniqueIdentifier
            : `#${uniqueIdentifier}`}
        </p>
        <p className="text-lg">{value}</p>
      </div>
      <div
        className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-gradient-to-r from-[#15BFFDB3] to-[#15BFFDB3] "
        style={{
          clipPath: "polygon(100% 58%, 22% 100%, 100% 100%)",
          borderRadius: "14px",
        }}
      />
    </div>
  );
};

export default ShowData;
