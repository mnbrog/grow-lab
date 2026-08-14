import React from 'react';

interface KineticTextProps {
  text: string;
  as?: 'span' | 'div';
  startIndex?: number;
  className?: string;
  wordClassName?: string;
}

/**
 * Splits text into words and staggers their entrance via CSS (see .kinetic-word
 * in GlobalStyles.css). Pure CSS animation-delay per word (no JS animation
 * loop), so it stays cheap and respects prefers-reduced-motion automatically.
 */
const KineticText: React.FC<KineticTextProps> = ({
  text,
  as: Component = 'span',
  startIndex = 0,
  className = '',
  wordClassName = '',
}) => {
  const words = text.split(' ');
  return (
    <Component className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`kinetic-word ${wordClassName}`}
          style={{ ['--i' as any]: startIndex + i }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Component>
  );
};

export default KineticText;
