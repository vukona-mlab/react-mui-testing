import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import { Container, Grid, Item } from '@mui/material';
import { InputComponent } from './Components/InputComponent';
import YourComponent from './Components/Form';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RegisterForm from './Components/RegisterForm';
import useStyles from './hooks/useStyles';


function App() {
  const classes = useStyles()
  
  return (
    // <Container style={{ backgroundColor: 'yellow', margin: 0}} lg={12} >

          <Grid container xs={12}  style={{ backgroundColor: 'red', height: '100vh' }}>
          <Grid item xs={4} md={4} lg={4} display={{ xs: 'none', md: 'flex' }} sx={{ bgcolor: 'tertiary.main', justifyContent: 'center', alignItems: 'center'}}>
            <img className={classes.logo}  src={require('./assets/logo.png')}  alt="Ezamazwe Edutech Business logo" width={'80%'} style={{alignSelf: 'center'}}/>
          </Grid>
          <Grid item xs={12} md={8} lg={8} sx={{bgcolor: 'primary.main'}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <InputComponent /> */}
  
  
            <RegisterForm />
          </Grid>
        </Grid>


    // </Container>
  );
}

export default App;
