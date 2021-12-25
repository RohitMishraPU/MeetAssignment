import { createTheme, ThemeProvider} from '@mui/material/styles';
import ProfileCard from './components/ProfileCard';
import Header from './components/Header';


const theme = createTheme({
  palette: {
    primary: {
      main: '#55c6a9',
    },
  }

});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProfileCard />
    </ThemeProvider>
  );
}

export default App;
