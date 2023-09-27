import { ReactNode } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export const textButtons = [
    {
        btnClass: "btn-container",
        variant: "text",
        color: "primary",
        customText: "This is bold text.",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "secondary",
        customText: "This is bold text.",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "text",
        color: "success",
        customText: "This is bold text.",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "contained",
        color: "primary",
        customText: "btn-container",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "contained",
        color: "secondary",
        customText: "btn-container",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "contained",
        color: "success",
        customText: "btn-container",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "outlined",
        color: "primary",
        customText: "btn-container",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "outlined",
        color: "secondary",
        customText: "btn-container",
        weight: "bold"
    },
    {
        btnClass: "btn-container",
        variant: "outlined",
        color: "success",
        customText: "btn-container",
        weight: "bold"
    }
];

export interface CheckboxProps{
    checked: boolean;
    color: any;
    disabled: boolean;
    label: string;
    onChange?: () => void;
    icon?: HTMLElement;
    checkedIcon?: any;
}

export const checkboxes: CheckboxProps[] = [
    {
        label : "Checkbox 1", 
        disabled: true, 
        color: "primary", 
        checked: true, 
    },
    {
        label : "Checkbox 2", 
        disabled: false, 
        color: "secondary", 
        checked: true, 
    },
    {
        label : "Checkbox 3", 
        disabled: false, 
        color: "success", 
        checked: false, 
    },
    {
        label : "Checkbox 4", 
        disabled: false, 
        color: "success", 
        checked: false
    },
    {
        label : "Checkbox 5", 
        disabled: false, 
        color: "success", 
        checked: false, 
    }
];