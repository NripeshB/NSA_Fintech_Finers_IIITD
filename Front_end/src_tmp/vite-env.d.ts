
/// <reference types="vite/client" />



// declare module '*.svg' {
//   import * as React from 'react';

//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

//   // Rename default export to avoid duplicate identifier error
//   const defaultSrc: string;
//   export default defaultSrc;
// }

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add more environment variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
