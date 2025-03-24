import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Navigation from './pages/routes/routes';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

