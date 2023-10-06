import React from 'react';
import './button.css';

interface ButtonProps {
  type?: 'solid'| 'outline'| 'soft' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  style?: 'primary'| 'secondary'| 'danger';
  iconType?: 'none' | 'leading' | 'trailing' | 'leadingTrailing' | 'standalone';
  state?: 'default' | 'hover' | 'disabled';
  onClick?: () => void;
}


export const Button = ({
    type = 'solid',
    size = 'medium',
    style = 'primary',
    iconType = 'none',
    state = 'default',
  }: ButtonProps) => {
    return (
      <button
        type="button"
        className={['button',  `button-size-${size}`, `button-style-${style}`,
        `button-type-${type}`, `button-style-${iconType}`, `button-state-${state}`,].join(' ')}
      >
        Button
        <style jsx>{`
          button {
           
          }
        `}</style>
      </button>
    );
  };
  