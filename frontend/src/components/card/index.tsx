import React, { HTMLAttributes, ReactNode } from 'react';

interface CardProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  style?: HTMLAttributes<HTMLDivElement>['style'];
  children: ReactNode;
  size?: 'small' | 'large';
  body?: boolean;
  color?: 'default' | 'primary' | 'secondary';
  hover?: boolean;
  defaultModifier?: boolean
  title?: (
    className: HTMLAttributes<HTMLHeadingElement>['className']
  ) => ReactNode;
}
export const Card = ({
  body,
  className = '',
  style,
  defaultModifier = true,
  color,
  size,
  title,
  hover,
  children
}: CardProps) => {
  const innerClassName = `
    uk-card
    ${size ? `uk-card-${size}` : ''}
    ${color ? `uk-card-${color}` : ''}
    ${hover ? 'uk-card-hover' : ''}
    ${body ? 'uk-card-body' : ''}
    ${defaultModifier ? 'uk-card-default' : ''}
    ${className}
  `;
  return (
    <div className={innerClassName} style={style}>
      {title ? title('uk-card-title') : null}
      {children}
    </div>
  );
};
