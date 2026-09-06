const Divider = () => {
  return (
    <div className={`flex flex-row w-full h-[1px]`}>
      <div className={`w-1/10 bg-gradient-to-r from-transparent to-border`} />
      <div className={`w-full bg-border`} />
      <div className={`w-1/10 bg-gradient-to-l from-transparent to-border`} />
    </div>
  );
};

export default Divider;
