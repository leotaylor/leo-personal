import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VisitedSectionsProvider } from './context/VisitedSectionsContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <VisitedSectionsProvider>
      <App />
    </VisitedSectionsProvider>
  </React.StrictMode>
);
