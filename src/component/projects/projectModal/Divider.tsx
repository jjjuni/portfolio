const Divider = () => {

  return (
    <div className={`flex flex-row w-full h-[1px]`}>
      <div className={`w-1/10 bg-gradient-to-r from-[#232323] to-[#5D5D5D]`}/>
      <div className={`w-full bg-[#5D5D5D]`}/>
      <div className={`w-1/10 bg-gradient-to-l from-[#232323] to-[#5D5D5D]`}/>
    </div>
  )
}

export default Divider;