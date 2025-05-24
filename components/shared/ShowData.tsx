const ShowData = ({ uniqueIdentifier, value }: { uniqueIdentifier: string, value:string }) => {
  return (
    <div className=" rounded-xl p-px bg-gradient-to-r from-[#71a546b3] to-[#15BFFDB3] ">
      <div className=" py-2 px-6 rounded-xl bg-[#191D29] text-white ">
        <p>#{uniqueIdentifier}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ShowData;
