import React, { HTMLAttributes, ReactNode } from 'react';

interface TextProps {
  size?: 'small' | 'default' | 'large';
  weight?: 'light' | 'normal' | 'bold' | 'lighter' | 'bolder';
  className?: HTMLAttributes<HTMLParagraphElement>['className'];
  italic?: boolean;
  transform?: 'capitalize' | 'uppercase' | 'lowercase';
  color?:
    | 'muted'
    | 'emphasis'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  background?: boolean;
  backgroundStyle?: HTMLAttributes<HTMLParagraphElement>['style'];
  hAlign?:
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'left@s'
    | 'right@s'
    | 'center@s'
    | 'justify@s'
    | 'left@m'
    | 'right@m'
    | 'center@m'
    | 'justify@m'
    | 'left@l'
    | 'right@l'
    | 'center@l'
    | 'justify@l'
    | 'left@xl'
    | 'right@xl'
    | 'center@xl'
    | 'justify@xl';
  vAlign?:
    | 'top'
    | 'middle'
    | 'bottom'
    | 'baseline'
    | 'top@s'
    | 'middle@s'
    | 'bottom@s'
    | 'baseline@s'
    | 'top@m'
    | 'middle@m'
    | 'bottom@m'
    | 'baseline@m'
    | 'top@l'
    | 'middle@l'
    | 'bottom@l'
    | 'baseline@l'
    | 'top@xl'
    | 'middle@xl'
    | 'bottom@xl'
    | 'baseline@xl';
  wrap?: 'truncate' | 'break' | 'nowrap';
  children: ReactNode;
  style?: HTMLAttributes<HTMLParagraphElement>;
}

/**
 * Stylized text component
 */
export const Text = ({
  size,
  className = '',
  weight,
  italic,
  transform,
  color,
  background,
  hAlign,
  vAlign,
  wrap,
  children,
  ...props
}: TextProps) => {
  const textClassName = `
	${size ? `uk-text-${size}` : ''}
	${weight ? `uk-text-${weight}` : ''}
	${italic ? 'uk-text-italic' : ''}
	${transform ? `uk-text-${transform}` : ''}
	${color ? `uk-text-${color}` : ''}
	${hAlign ? `uk-text-${hAlign}` : ''}
	${vAlign ? `uk-text-${vAlign}` : ''}
	${wrap ? `uk-text-${wrap}` : ''}
	${className}
	`;

  return (
    <p className={textClassName} {...props}>
      {background || props.backgroundStyle ? (
        <span className='uk-text-background' style={props.backgroundStyle}>
          {children}
        </span>
      ) : (
        children
      )}
    </p>
  );
};
