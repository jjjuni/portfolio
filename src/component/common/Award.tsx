type AwardProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; }>;
  iconClassName: string;
  title: string;
  result: string;
}

const Award = ({
  Icon,
  iconClassName,
  title,
  result,

}: AwardProps) => {
  return (
    <div className={`flex flex-row gap-4 items-center`}>
      <Icon className={`${iconClassName}`}/>
      <div>
        <p className={`text-[14px]`}>{title}</p>
        <p className={`text-[14px] text-[#9D9D9D]`}>{result}</p>
      </div>
    </div>
  )
}

export default Award;