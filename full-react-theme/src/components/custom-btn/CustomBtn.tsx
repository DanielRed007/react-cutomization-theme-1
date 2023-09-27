
import React from 'react';
import Stack from '@mui/material/Stack';
import { ThemeButton } from '../shared/ThemeButton/ThemeButton';
import { textButtons } from '../../mock/data/buttons';


export const CustomBtn = () => {
    return (
        <div>
            <Stack spacing={2} direction="column">
                { textButtons.map((button,index) => (
                    <ThemeButton 
                        key={index} 
                        btnClass={button.btnClass} 
                        variant={button.variant} 
                        color={button.color} 
                        customTitleText="This is a Button" 
                        weight={button.weight}  
                    />
                )) }
            </Stack>
        </div>
    )
}
