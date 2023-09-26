
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TextButtonsProps = [
    {
        btnClass: "btn-container",
        variant: "text",
        color: "primary",
        customText: "This is bold text."
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "secondary",
        customText: "This is bold text."
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "success",
        customText: "This is bold text."
    },
    {
        btnClass: "btn-container",
        variant: "contained",
        color: "primary",
        customText: "btn-container"
    },
    {
        btnClass: "btn-container",
        variant: "contained",
        color: "secondary",
        customText: "btn-container"
    },
    {
        btnClass: "btn-container",
        variant: "contained",
        color: "success",
        customText: "btn-container"
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "primary",
        customText: "btn-container"
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "secondary",
        customText: "btn-container"
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "success",
        customText: "btn-container"
    }
];

const buttonSet = ["primary", "secondary", "success"]

export const CustomBtn = () => {
    return (
        <div>
            <Stack spacing={2} direction="column">
                <Button className="btn-container" variant="text" color="primary">
                    <Typography variant="body1" fontWeight="bold">This is bold text.</Typography>
                </Button>
                <Button className="btn-container" variant="text" color="secondary">
                    <Typography variant="body1" fontWeight="bold">This is bold text.</Typography>
                </Button>
                <Button className="btn-container" variant="text" color="success" >
                    <Typography variant="body1" fontWeight="bold">This is bold text.</Typography>
                </Button>
                <Button className="btn-container" variant="contained" color="primary">
                    <Typography variant="body1" fontWeight="bold">This is bold contained.</Typography>
                </Button>
                <Button className="btn-container" variant="contained" color="secondary">
                    <Typography variant="body1" fontWeight="bold">This is bold contained.</Typography>
                </Button>
                <Button className="btn-container" variant="contained" color="success" >
                    <Typography variant="body1" fontWeight="bold">This is bold contained.</Typography>
                </Button>
                <Button className="btn-container" variant="outlined" color="primary">
                    <Typography variant="body1" fontWeight="bold">This is bold outlined.</Typography>
                </Button>
                <Button className="btn-container" variant="outlined" color="secondary">
                    <Typography variant="body1" fontWeight="bold">This is bold outlined.</Typography>
                </Button>
                <Button className="btn-container" variant="outlined" color="success" >
                    <Typography variant="body1" fontWeight="bold">This is bold outlined.</Typography>
                </Button>
            </Stack>
        </div>
    )
}
