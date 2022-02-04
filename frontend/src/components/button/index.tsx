import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode
} from 'react';

interface ButtonProps {
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link';
  className?: HTMLAttributes<
    HTMLAnchorElement | HTMLButtonElement
  >['className'];
  size?: 'small' | 'large';
  width?:
    | '1-1'
    | '1-2'
    | '1-3'
    | '2-3'
    | '1-4'
    | '3-4'
    | '1-5'
    | '2-5'
    | '3-5'
    | '4-5'
    | '1-6'
    | '5-6';
  disabled?: boolean;
  dropdownMenu?: ReactNode
  children: ReactNode;
}
export const Button = ({
  type = 'button',
  href,
  color = 'default',
  size,
  className = '',
  width,
  disabled,
  dropdownMenu,
  children
}: ButtonProps) => {
  const classNameValue = `
    uk-button
    uk-button-${color}
    ${size ? `uk-button-${size}` : ''}
    ${width ? `uk-width-${width}` : ''}
    ${className}
  `;

  if (href) {
    return (
      <a className={classNameValue} href={href}>
        {children}
      </a>
    );
  }
  return (
    <>
    <button className={classNameValue} type={type} disabled={disabled}>
      {children}
    </button>
      {dropdownMenu}
    </>
  );
};
