import React from 'react';
import './button.css';

import { IconBrackets, IconPlus  } from '@codexteam/icons';

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
        `button-type-${type}`, `button-iconType-${iconType}`, `button-state-${state}`,].join(' ')}
      >
        {iconType == "none" ? <div>Button</div> 
        :iconType == "leading" ? <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg> {"Button"}</span> 
        : iconType == "trailing" ? <span>{"Button"} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" transform='rotate(90)' fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg></span> :
        iconType == "leadingTrailing" ? <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg> {"Button"} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" transform='rotate(90)' fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg></span> 
        :<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>}
        </button>
    );
  };
  