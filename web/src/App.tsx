import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={{ colors: theme }}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={5000} className="toast-container" />
    </ThemeProvider>
  );
}

export default App;
