
import { Button, Typography } from '@mui/material';
import React, { FC } from 'react';

export interface Props{
    btnClass: string;
    variant: any;
    color: any;
    customTitleText: string;
    weight: string;
    onClick?: () => void;
}

export const ThemeButton: FC<Props> = ({btnClass, variant, color, customTitleText, weight, onClick }) => {
  return (
    <Button className={btnClass} variant={variant} color={color} onClick={onClick}>
        <Typography variant="body1" fontWeight={weight}>{ customTitleText }</Typography>
    </Button>
  )
}
