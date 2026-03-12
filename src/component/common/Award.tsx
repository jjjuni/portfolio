type AwardProps = {
  className?: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; }>;
  iconClassName: string;
  title: string;
  result: string;
}

const Award = ({
  className,
  Icon,
  iconClassName,
  title,
  result,

}: AwardProps) => {
  return (
    <div className={`${className} flex flex-row gap-4 items-center`}>
      <Icon className={`${iconClassName}`}/>
      <div>
        <p className={`max-lg:text-[12px] text-[14px] truncate`}>{title}</p>
        <p className={`max-lg:text-[12px] text-[14px] text-[#9D9D9D]`}>{result}</p>
      </div>
    </div>
  )
}

export default Award;