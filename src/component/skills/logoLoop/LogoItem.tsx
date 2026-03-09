type LogoItemProps = {
  Logo: React.ComponentType<{ className?: string }>;
  title: string;
  descList: string[];
  onHover: (data: {
    visible: true;
    x: number;
    y: number;
    title: string;
    descList: string[];
  }) => void;
  onLeave: () => void;
};

export default function LogoItem({
  Logo,
  title,
  descList,
  onHover,
  onLeave,
}: LogoItemProps) {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    onHover({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.bottom,
      title,
      descList,
    });
  };

  return (
    <div
      className="cursor-pointer transition-transform duration-300 hover:scale-120"
      onMouseEnter={handleEnter}
      onMouseLeave={onLeave}
    >
      <Logo/>
    </div>
  );
}