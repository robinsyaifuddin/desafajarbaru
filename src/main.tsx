
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import badge remover utility
import './utils/removeLovableBadge'

createRoot(document.getElementById("root")!).render(<App />);
