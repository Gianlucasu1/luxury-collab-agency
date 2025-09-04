import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug: Add device info to body for testing
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.setAttribute('data-dpr', window.devicePixelRatio.toString());
  body.setAttribute('data-zoom', (window.outerWidth / window.innerWidth).toFixed(2));
  body.setAttribute('data-width', window.innerWidth.toString());
  
  // Log debug info
  console.log('🔍 DEBUG INFO:');
  console.log('Device Pixel Ratio:', window.devicePixelRatio);
  console.log('Window Inner Width:', window.innerWidth);
  console.log('Window Outer Width:', window.outerWidth);
  console.log('Screen Width:', screen.width);
  console.log('Zoom Level:', window.outerWidth / window.innerWidth);
  console.log('User Agent:', navigator.userAgent);
});

createRoot(document.getElementById("root")!).render(<App />);
