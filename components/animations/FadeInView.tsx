'use client';

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInView({
  children,
  className = '',
}: FadeInViewProps) {
  return <div className={className}>{children}</div>;
}
