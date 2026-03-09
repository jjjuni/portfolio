import type { ReactNode } from "react";

const ModalSection = ({
  label,
  className,
  children,
}: { label: string, className?: string, children: ReactNode }) => {

  return (
    <div className={`${className} flex flex-col gap-2 px-5`}>
      <p className={`text-[24px] font-bold`}>{label}</p>
      {children}
    </div>
  )
}

export default ModalSection;