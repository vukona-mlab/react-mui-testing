import { FormControl, OutlinedInput, FormHelperText, InputLabel, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
// import FormHelperText from '@mui/material/FormHelperText';
import React from 'react'

export const InputComponent = () => {   
    return (
        <FormControl sx={{ width: 1, margin: '10px 0' }}>
            <Typography variant="subtitle1" component="div" sx={{ fontSize: '14px', color: 'primary.main' }}>
                Your Label
            </Typography>
            <OutlinedInput id={'email'} sx={{ borderRadius: '12px', height: '50px', width: 1 }}/>
            <FormHelperText sx={{ color: 'warning.main' }}>Help</FormHelperText>
        </FormControl>
    )
}
