import React, { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  size?: 'xsmall'|'small'|'large'|'xlarge'|'expand'
  children: ReactNode;
}
export const Container = ({ className = '', size, children }: ContainerProps) => {
  const innerClassName = `
	uk-container
  ${size ? `uk-container-${size}` : ''}
	${className}
	`;
  return <div className={innerClassName}>{children}</div>;
};
