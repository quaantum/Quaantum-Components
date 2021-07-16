import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ButtonProps
  extends QuaantumProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  return <QuaantumBase as='button' styleAs='Button' {...props} ref={ref} />;
});

export default Button;
