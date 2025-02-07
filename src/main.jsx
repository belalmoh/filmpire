import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import './index.css'
import App from './components/App.jsx'
import store from './app/store'

const theme = createTheme({});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
  </StrictMode>,
)
