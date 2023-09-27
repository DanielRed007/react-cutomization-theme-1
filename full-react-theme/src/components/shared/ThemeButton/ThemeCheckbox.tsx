import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export interface Props{
    checked: boolean;
    color: any;
    disabled: boolean;
    label: string;
    onChange?: () => void;
    icon?: any;
    checkedIcon?: any;
}

export const ThemeCheckbox: FC<Props> = ({ label, disabled, color, checked , onChange, icon, checkedIcon }) => {
    const checkLabel = { inputProps: { 'aria-label': label } };

    return (
        <div>
            <Checkbox 
                disabled={disabled} 
                {...checkLabel} 
                color={color}
                checked={checked}
                onChange={onChange}
                icon={icon}
                checkedIcon={checkedIcon}    
            />
        </div>
    )
}
