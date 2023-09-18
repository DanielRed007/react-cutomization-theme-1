
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const CustomBtn = () => {
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button className="btn-container" variant="text">Text</Button>
                <Button className="btn-container" variant="contained">Contained</Button>
                <Button className="btn-container" variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}
