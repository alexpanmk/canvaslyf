import { useState, useEffect, useRef } from 'react'
import { AppShell, Group, Stack, Text, TextInput } from '@mantine/core'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const inputRef = useRef(null);
  const unityRef = useRef(null);

  const [value, setValue] = useState('');

  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/canvasunity/Build/canvasunity.loader.js",
    dataUrl: "/assets/canvasunity/Build/canvasunity.data.unityweb",
    frameworkUrl: "/assets/canvasunity/Build/canvasunity.framework.js.unityweb",
    codeUrl: "/assets/canvasunity/Build/canvasunity.wasm.unityweb",
  });

  useEffect(() => {
    // const handleEsc = (event: KeyboardEvent) => {
    //   if (event.key === 'Escape') {
    //     console.log('Escape key pressed');
    //     unityRef.current.blur();
    //     inputRef.current.focus();

    //   }
    // };

    // window.addEventListener('keydown', handleEsc);

    return () => {
      // window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>

      <AppShell>

        <AppShell.Main style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>

          {/* <Unity ref={unityRef} unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} /> */}
          <div style={{
            backgroundImage: 'url(/assets/images/galleryplaceholder.png)',
            backgroundSize: 'cover',
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1
          }}>
            <Group style={{ width: '100%', height: '100%' }}>
              {/* <TextInput onClick={() => {
                console.log('clicked');
              }} value={value} onChange={(evt) => {
                setValue(evt.currentTarget.value);
              }} ref={inputRef} placeholder="Search" style={{ width: '100%' }} /> */}
            </Group>
          </div>
        </AppShell.Main>
      </AppShell>

    </>
  )
}

export default App
