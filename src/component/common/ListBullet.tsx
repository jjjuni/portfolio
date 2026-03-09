const ListBullet = ({
  className,
  color
}: { className?: string, color?: string }) => {
  return (
    <div className={`h-6 flex items-center`}>
      <span className={`${className} ${color ? color : `bg-white`} rounded-full w-1 h-1 shrink-0`} />
    </div>
  )
}

export default ListBullet;