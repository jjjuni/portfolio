const ListBullet = ({
  className,
  color
}: { className?: string, color?: string }) => {
  return (
    <div className={`max-sm:h-4 max-md:h-5 h-6 flex items-center`}>
      <span className={`${className} ${color ? color : `bg-white`} rounded-full size-1 shrink-0`} />
    </div>
  )
}

export default ListBullet;