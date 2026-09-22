import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    __react_root__?: Root;
  }
}

const container = document.getElementById('root');

if (container) {
  let root = (container as any)._reactRoot || window.__react_root__;

  if (!root) {
    // Clean up any stale React internal properties if root reference was lost
    delete (container as any)._reactRootContainer;
    Object.keys(container).forEach((key) => {
      if (key.startsWith('__reactContainer$') || key.startsWith('__reactFiber$')) {
        delete (container as any)[key];
      }
    });
    Object.getOwnPropertySymbols(container).forEach((sym) => {
      if (sym.toString().includes('react')) {
        delete (container as any)[sym];
      }
    });

    root = createRoot(container);
    (container as any)._reactRoot = root;
    window.__react_root__ = root;
  }

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}


