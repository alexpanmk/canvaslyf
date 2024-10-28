import React, { useState } from 'react';
import { SimpleGrid, Badge, Group, Stack, Modal, Text, Title, Card, Image, Button } from '@mantine/core';

import AddArtwork from './AddArtwork';
import ArtworkItemView from './ArtworkItemView';

import { isNull } from '../../functions/functions';

const sampleArtworks = [
  {
    id: 1,
    title: 'Starry Night',
    imageUrl: 'https://example.com/starry-night.jpg',
    description: 'A famous painting by Vincent van Gogh.'
  },
  {
    id: 2,
    title: 'Mona Lisa',
    imageUrl: 'https://example.com/mona-lisa.jpg',
    description: 'A portrait painting by Leonardo da Vinci.'
  },
  {
    id: 3,
    title: 'The Persistence of Memory',
    imageUrl: 'https://example.com/persistence-of-memory.jpg',
    description: 'A painting by Salvador Dalí.'
  },
  // Add more artwork objects as needed
];

const ArtworkList = (props: any) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentView, setCurrentView] = useState('list');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // const [artistID, setArtistID] = useState(null);

  const artworks = isNull(props.artworks) ? sampleArtworks : props.artworks;
  const user = isNull(props.user) ? {} : props.user;
  // if (!isNull(user.password)) setArtistID(user.password);


  const handleViewDetails = (artwork: any) => {
    setSelectedArtwork(artwork);
    setCurrentView('detail');
  };

  const handleBackToList = () => {
    setSelectedArtwork(null);
    setCurrentView('list');
  };

  return (
    <Stack style={{ height: '100%', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>
      <Group justify='space-between'>
        <Title order={1}>{`My Artworks`}</Title>
        <Button color="blue" onClick={() => setModalOpened(true)}>Add Artwork</Button>
      </Group>
      <Stack style={{ overflow: 'auto' }}>
        {currentView === 'list' && (
          <SimpleGrid cols={3} spacing="lg">
            {artworks.map((artwork: any) => (
              <Card key={artwork.id} shadow="sm" padding="lg">
                <Card.Section>
                  <Image src={artwork.file} alt={artwork.file} />
                </Card.Section>
                <Group style={{ marginBottom: 5, marginTop: 10 }}>
                  <Title order={4}>{artwork.title}</Title>
                </Group>
                <Group style={{ marginBottom: 5 }}>
                  <Title order={5}>{`$${artwork.price}`}</Title>
                  {artwork.status === 'Sold' && <Badge color="red">Sold</Badge>}
                </Group>
                <Stack style={{ flex: 1 }}>
                  <Text size="sm">{artwork.description}</Text>
                </Stack>
                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={() => handleViewDetails(artwork)}>
                  View Details
                </Button>
              </Card>
            ))}
          </SimpleGrid>
        )}
        {currentView === 'detail' && selectedArtwork && (
          <ArtworkItemView artwork={selectedArtwork} onBack={handleBackToList} />
        )}
      </Stack>


      <Modal
        size={'50%'}
        centered

        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Add New Artwork"
      >
        <AddArtwork />
      </Modal>
    </Stack>
  );
}

export default ArtworkList;