import React from 'react'
import { Stack, Image, Text, Title } from '@mantine/core'

const exampleArtwork = {
  imageUrl: 'https://example.com/artwork.jpg',
  title: 'Starry Night',
  artist: 'Vincent van Gogh',
  description: 'A famous painting by Vincent van Gogh.'
};

const ArtInformation = (props: any) => {

  const artwork = exampleArtwork;

  return (
    <Stack style={{ height: '100%' }}>



      return (
      <>
        <Image src={artwork.imageUrl} alt={art.title} />
        <Title order={2}>{artwork.title}</Title>
        <Text>{artwork.artist}</Text>
        <Text>{artwork.description}</Text>
      </>
      );
    </Stack>
  )
}

export default ArtInformation