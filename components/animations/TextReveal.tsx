'use client';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function TextReveal({
  text,
  className = '',
  as: Tag = 'span',
}: TextRevealProps) {
  return <Tag className={className}>{text}</Tag>;
}
