import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    console.log({ theme })
    return {
        [theme.breakpoints.up('xs')]: {
            formBox: {
                display: 'flex',
                padding: '40px 30px',
                width: '100%',
                borderRadius: '0px',
                height: 'calc(100% - 80px)',
                justifyContent: 'center',
                alignItems: 'center'
            },
            form: {
                display: 'flex',
                width: '100%',
                // backgroundColor: 'blue',
                alignSelf: 'center'
            },
            formInputs: {
                width: '100%'
            }
        },
        [theme.breakpoints.down('sm')]: {
            formBox: {
                backgroundColor: '#FFF'
            }
        },
        [theme.breakpoints.up('mobile')]: {
            formBox: {
                borderRadius: '10px',
                // backgroundColor: 'red',
                width: '400px',
                // width: '80%',
                height: 'fit-content',
                padding: '50px'
            }
        },
        [theme.breakpoints.up('md')]: {
            formBox: {
                // maxWidth: '600px',
                width: '70%',
                backgroundColor: 'red'
            }
        },
        [theme.breakpoints.up('lg')]: {
            formBox: {
                padding: 70,
                maxWidth: '600px'
            },
            formInputs: {
                width: '100%'
            },
            logo: {
                width: 360
            }
        },
    }
});

export default useStyles;