const BgLabel = ({
  text
}: { text: string }) => {

  return (
    <div className={`rounded-[4px] px-1.5 py-1 bg-[#5D5D5D]`}>
      <p className={`text-[18px] font-bold`}>{text}</p>
    </div>
  )
}

export default BgLabel;