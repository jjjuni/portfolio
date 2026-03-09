const ProjectLogo = ({
  title,
  className,
}: {title: string, className: string}) => {

  return (
    <p className={`text-[60px] leading-none ${className}`}>{title}</p>
  )
}

export default ProjectLogo;