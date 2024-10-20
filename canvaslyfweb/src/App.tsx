import { useState, useEffect, useRef } from 'react'
import { Title, AppShell, Group, Stack, Text, TextInput } from '@mantine/core'
import { Unity, useUnityContext } from "react-unity-webgl";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import SignUpFlow from './Components/SignUpFlow/SignUpFlow';
import { getFirestore } from "firebase/firestore";

import { NavBar } from './Components/NavBar/NavBar';
import ArtworkList from './Components/ArtworkList/ArtworkList';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/Home/Home';

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

  interface User {
    email: string;
    password: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState('Home');

  // const inputRef = useRef(null);
  // const unityRef = useRef(null);

  // const [value, setValue] = useState('');

  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/canvasunity/Build/canvasunity.loader.js",
    dataUrl: "/assets/canvasunity/Build/canvasunity.data.unityweb",
    frameworkUrl: "/assets/canvasunity/Build/canvasunity.framework.js.unityweb",
    codeUrl: "/assets/canvasunity/Build/canvasunity.wasm.unityweb",
  });


  return (
    <>
      <div style={{
        // backgroundImage: 'url(/assets/images/galleryplaceholder.png)',
        // backgroundSize: 'cover',
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1
      }}>

        {user &&
          <Group>
            {/* Left Nav */}
            <Stack style={{ padding: 20, height: '100vh', width: 80 }}>
              <NavBar onChange={(page) => setCurrentView(page)} />
              {/* <Stack style={{ padding: 20, height: '100vh', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 40 }}>

              </Stack> */}
            </Stack>

            {/* Main Content */}
            <Group style={{ height: '100vh', flex: 1, padding: 20 }}>
              {currentView === 'Home' &&
                <>
                  <Home />
                </>
              }
              {currentView === 'My Artworks' && <ArtworkList />}

            </Group>

          </Group>}

        {!user && <LoginPage
          onLogin={(email, password) => {
            setUser({ email, password })
            console.log(user)
          }}
        />}
      </div>

      <AppShell style={{
        // backgroundImage: 'url(/assets/images/galleryplaceholder.png)',
        // backgroundSize: 'cover',
      }}    >


        <AppShell.Main style={{
          // backgroundImage: 'url(/assets/images/galleryplaceholder.png)',
          // backgroundSize: 'cover',
          height: '100vh', position: 'relative', overflow: 'hidden'
        }}>

          <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />








          {/* <SignedOut>
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
          </SignedIn> */}
        </AppShell.Main>
      </AppShell>

    </>
  )
}

export default App
