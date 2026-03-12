type PartProps = {
  part: string;
  className?: string;
}

const Part = ({
  part,
  className,
}: PartProps) => {

  return (
    <div className={`${className} max-md:px-1.5 max-md:py-0.5 px-2 py-1 max-md:text-[8px] text-[10px] border border-[#9C9C9C] text-[#9C9C9C] rounded-full`}>
      {part}
    </div>
  )
}

export default Part;