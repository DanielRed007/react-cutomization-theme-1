
import React from 'react';
import Stack from '@mui/material/Stack';
import { checkboxes } from '../../mock/data/buttons';
import { ThemeCheckbox } from '../shared/ThemeButton/ThemeCheckbox';


export const CustomCheckbox = () => {
    return (
        <div>
            <Stack spacing={2} direction="column">
                { checkboxes.map((checkbox,index) => (
                    <ThemeCheckbox 
                        key={index}
                        label={checkbox.label} 
                        disabled={checkbox.disabled}
                        checked={checkbox.checked} 
                        color={checkbox.color}
                        icon={checkbox.icon} 
                    />
                )) }
            </Stack>
        </div>
    )
}