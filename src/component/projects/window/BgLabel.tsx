const BgLabel = ({ text }: { text: string }) => {
  return (
    <div className={`rounded-[4px] py-1`}>
      <p className={`text-14-16-18 font-bold`}>{text}</p>
    </div>
  );
};

export default BgLabel;
