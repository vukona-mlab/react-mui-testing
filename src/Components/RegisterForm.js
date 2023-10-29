import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import useStyles from '../hooks/useStyles';
import { InputComponent } from './InputComponent'


function RegisterForm() {
    const classes = useStyles();
    return (
        <Box
            className={classes.formBox}
            sx={{
                justifyContent: 'center',
                bgcolor: 'tertiary.main',
                gap: '20px',
                
            }}

        >
            {/* <p style={{ alignSelf: 'center', backgroundColor: 'red'}}>Hi there</p> */}
            <form className={classes.form} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', marginTop: '10px' }}>
                <Typography sx={{ fontSize: '36px', color: 'greys.dark', textAlign: 'center', textTransform: 'uppercase', marginBottom: '0px', fontWeight: '500', letterSpacing: -1 }}>Ezamazwe Edutech</Typography>
                <Typography sx={{ fontSize: '24px', color: 'greys.dark', textAlign: 'center', marginBottom: '0px', fontFamily: "Poppins", fontWeight: '300' }}>Login to you account</Typography>
                <Box className={classes.formInputs}>
                    <InputComponent />
                    <InputComponent />
                    <Typography component='div' sx={{ fontSize: '14px', color: 'primary.main', textAlign: 'right', textDecoration: 'underline', alignSelf: 'flex-end' }}>Forgot password</Typography>
                </Box>
                <Button variant="contained" sx={{ bgcolor: 'primary.main', borderRadius: '30px', padding: '15px', color: 'white', width: '260px', fontSize: '14px', textTransform: 'uppercase'}}>Sign In</Button>

            </form>

        </Box>
    )
}

export default RegisterForm