type PartProps = {
  part: string;
  className?: string;
}

const Part = ({
  part,
  className,
}: PartProps) => {

  return (
    <div className={`${className} px-2 py-1 text-[10px] border border-[#9C9C9C] text-[#9C9C9C] rounded-full`}>
      {part}
    </div>
  )
}

export default Part;