import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import { FormControlLabel, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => {
    console.log({ theme })
    return {
        label: {
            marginBottom: theme.spacing(1), // Adjust the spacing as needed
        },
    }
});

const YourComponent = () => {
    const classes = useStyles();

    return (
        <FormControl>
            <Typography variant="subtitle1" component="div" gutterBottom>
                Your Label
            </Typography>
            <TextField id="your-input" variant="outlined" fullWidth />
        </FormControl>
    );
};

export default YourComponent;
