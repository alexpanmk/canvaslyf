import { useState, useEffect, useRef } from 'react'
import { AppShell, Group, Stack, Text, TextInput } from '@mantine/core'
// import { Unity, useUnityContext } from "react-unity-webgl";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import SignUpFlow from './Components/SignUpFlow/SignUpFlow';
import { getFirestore } from "firebase/firestore";

//Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  // const inputRef = useRef(null);
  // const unityRef = useRef(null);

  // const [value, setValue] = useState('');

  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "/assets/canvasunity/Build/canvasunity.loader.js",
  //   dataUrl: "/assets/canvasunity/Build/canvasunity.data.unityweb",
  //   frameworkUrl: "/assets/canvasunity/Build/canvasunity.framework.js.unityweb",
  //   codeUrl: "/assets/canvasunity/Build/canvasunity.wasm.unityweb",
  // });


  return (
    <>

      <AppShell>

        <AppShell.Main style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <Group style={{
              backgroundImage: 'url(/assets/images/galleryplaceholder.png)',
              backgroundSize: 'cover',
              width: '100%', height: '100%'
            }}>
              <SignUpFlow signUpType={'artist'} />
            </Group>
          </SignedIn>
        </AppShell.Main>
      </AppShell>

    </>
  )
}

export default App
