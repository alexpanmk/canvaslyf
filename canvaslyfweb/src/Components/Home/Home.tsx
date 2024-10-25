import React, { useState } from 'react'
import { Stack, Group, Badge, Image, TextInput, ActionIcon } from '@mantine/core'

import PurchaseFlow from '../PurchaseFlow/PurchaseFlow'
import InformationPane from './InformationPane'
import Lisa from '../Lisa/Lisa'

import { updateArtwork } from '../../service/artwork'

const Home = (props: any) => {

  const { artworks } = props;
  const [currentView, setCurrentView] = useState('Information');
  const [buyArtwork, setBuyArtwork] = useState('');
  console.log(artworks);


  // console.log(artworks);

  return (
    <Group style={{
      justifyContent: 'flex-end', gap: 20, height: '100%', flex: 1, padding: 0
      , borderRadius: 20,
    }}>

      {buyArtwork && <Stack style={{ flex: 1, gap: 20, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>
        <PurchaseFlow
          artwork={artworks[buyArtwork]}
          onSuccess={() => {
            console.log('Success')
            const newArtwork = artworks.find((artwork: any) => artwork.id === buyArtwork)

            updateArtwork(buyArtwork, {
              ...newArtwork,
              buyerID: '12345',
              status: 'Sold'
            })
            setBuyArtwork('')
          }}
          onDismiss={() => setBuyArtwork('')}
        />
      </Stack>}

      <Stack style={{ width: 500, gap: 20, height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>

        <InformationPane
          artwork={artworks[0]}
          onBuy={(id: string) => setBuyArtwork(id)}
        />
        {currentView === 'Lisa' && <Lisa />}

      </Stack>

    </Group>
  )
}

export default Home