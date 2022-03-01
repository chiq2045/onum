import React, { HTMLAttributes, ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
  marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'hyphen';
  className?: HTMLAttributes<HTMLUListElement>['className'];
  color?: 'muted' | 'emphasis' | 'primary' | 'secondary';
  divider?: boolean;
  striped?: boolean;
  size?: 'collapse' | 'large';
  ordered?: boolean;
  style?: HTMLAttributes<HTMLUListElement>['style'];
}
export const List = ({
  children,
  marker,
  className = '',
  color,
  divider,
  striped,
  size,
  ordered,
  style
}: ListProps) => {
  const innerClassName = `
    uk-list
    ${marker ? `uk-list-${marker}` : ''}
    ${color ? `uk-list-${color}` : ''}
    ${divider ? 'uk-list-divider' : ''}
    ${striped ? 'uk-list-striped' : ''}
    ${size ? `uk-list-${size}` : ''}
    ${className}
  `;

  return ordered ? (
    <ol style={style} className={innerClassName}>
      {children}
    </ol>
  ) : (
    <ul style={style} className={innerClassName}>
      {children}
    </ul>
  );
};
