type BoldSpanProps = {
  className?: string;
  children: React.ReactNode;
};

export default function BoldSpan({
  className,
  children,
}: BoldSpanProps) {
  return (
    <span className={`font-bold text-white ${className}`}>{children}</span>
  )
}