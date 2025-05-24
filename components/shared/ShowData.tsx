const ShowData = ({ uniqueIdentifier, value }: { uniqueIdentifier: string | number, value: string }) => {
  return (
    <div className="rounded-xl p-px bg-gradient-to-r from-[#71a546b3] to-[#15BFFDB3]">
      <div className="py-2 px-6 rounded-xl bg-[#191D29] text-white">
        <p className="text-xs">{typeof uniqueIdentifier === "string" ? uniqueIdentifier : `#${uniqueIdentifier}`}</p>
        <p className="text-lg">{value}</p>
      </div>
    </div>
  );
};

export default ShowData;
