import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

console.log(process.env.NX_TASK_TARGET_PROJECT);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.NX_TASK_TARGET_PROJECT}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
