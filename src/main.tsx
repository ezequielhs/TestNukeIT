import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Inspector, type InspectParams } from 'nukeit-react-inspector';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Inspector
        onClickElement={({ codeInfo }: InspectParams) => {
          if (!codeInfo?.absolutePath) return;
          const { absolutePath } = codeInfo
          console.log(codeInfo);
          if (window) {
            window.top?.postMessage({ type: "openFile", value: absolutePath }, "*");
          }
        }}
      />
  </React.StrictMode>,
)
