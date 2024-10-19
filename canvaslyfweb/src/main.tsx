import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';

import App from './App.tsx'
import '@mantine/core/styles.css';

import { ClerkProvider } from '@clerk/clerk-react'

//Import Clerk key from env local
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <MantineProvider>
        <App />
      </MantineProvider>
    </ClerkProvider>
  </StrictMode>,
)
