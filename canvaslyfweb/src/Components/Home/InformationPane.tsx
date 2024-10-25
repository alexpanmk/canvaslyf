import React from 'react'
import { Button, Tabs, Title, Stack, Group, Image, TextInput, ActionIcon, ScrollArea, Text } from '@mantine/core';

const InformationPane = (props: any) => {

  const artwork = props.artwork;

  return (
    <Stack style={{ gap: 20 }}>
      <Title order={2} style={{ color: '#FFF' }}>Artwork Information</Title>

      <Group style={{ gap: 20 }}>
        <Image src={artwork && artwork.file} alt="Artwork" style={{ width: 200, height: 200, objectFit: 'cover' }} />
        <Stack style={{ gap: 10 }}>
          <Text style={{ color: '#FFF' }}>{artwork && artwork.title}</Text>
          <Text style={{ color: '#FFF' }}>{artwork && artwork.artist}</Text>

          <Group style={{ gap: 10 }}>
            <Text style={{ color: '#FFF' }}>
              {artwork && artwork.price && `$${artwork.price.toLocaleString()}`}
            </Text>
            <Button color="blue" variant="light">Buy</Button>
          </Group>

          <Text style={{ color: '#FFF' }}>{artwork && artwork.description}</Text>
        </Stack>
      </Group>
    </Stack>

  )
}

export default InformationPane