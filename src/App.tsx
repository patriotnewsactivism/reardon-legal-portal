import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import Header from './Header';
import Dashboard from './Dashboard';
import Timeline from './Timeline';
import Evidence from './Evidence';
import Entities from './Entities';
import Documents from './Documents';
import EventMap from './EventMap';
import Navigation from './Navigation';

// Data
import { events, evidence, entities, documents, legalIssues } from './caseData';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      light: '#34495e',
      dark: '#1a252f',
    },
    secondary: {
      main: '#3498db',
      light: '#5dade2',
      dark: '#2980b9',
    },
    error: {
      main: '#e74c3c',
    },
    warning: {
      main: '#f39c12',
    },
    info: {
      main: '#95a5a6',
    },
    success: {
      main: '#27ae60',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flex: 1 }}>
            <Navigation />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/" element={
                  <Dashboard 
                    events={events}
                    evidence={evidence}
                    entities={entities}
                    documents={documents}
                    legalIssues={legalIssues}
                  />
                } />
                <Route path="/timeline" element={<Timeline events={events} />} />
                <Route path="/evidence" element={<Evidence evidence={evidence} />} />
                <Route path="/entities" element={<Entities entities={entities} />} />
                <Route path="/documents" element={<Documents documents={documents} />} />
                <Route path="/map" element={<EventMap events={events} />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
