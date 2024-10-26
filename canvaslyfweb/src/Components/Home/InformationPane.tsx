import React from 'react'
import { Badge, Button, Tabs, Title, Stack, Group, Image, TextInput, ActionIcon, ScrollArea, Text } from '@mantine/core';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { isNull } from '../../functions/functions';



const InformationPane = (props: any) => {

  const artwork = isNull(props.artwork) ? {} : props.artwork;
  console.log(artwork.id);

  if (isNull(artwork.id)) return <></>;

  const sold = isNull(artwork.status) ? false : artwork.status;

  return (
    <Stack style={{ gap: 20, height: '100%' }}>
      <Title order={2} style={{ color: '#FFF' }}>Artwork Information</Title>

      <Group style={{ gap: 20, flex: 1, overflow: 'auto' }}>
        <Image src={artwork && artwork.file} alt="Artwork" style={{ width: 200, height: 200, objectFit: 'cover' }} />
        <Stack style={{ gap: 10 }}>
          <Text style={{ color: '#FFF' }}>{artwork && artwork.title}</Text>
          <Text style={{ color: '#FFF' }}>{artwork && artwork.artist}</Text>

          <Group style={{ gap: 10, justifyContent: 'space-between' }}>
            <Title order={4} style={{ color: '#FFF' }}>
              {artwork && artwork.price && `$${artwork.price.toLocaleString()}`}
            </Title>
            <Group style={{ gap: 10 }}>
              <ActionIcon color="red" radius="xl">
                {props.liked ? <IconHeartFilled color="red" /> : <IconHeart />}
              </ActionIcon>
              {!sold && <Button onClick={() => props.onBuy(artwork.id)} color="green">Buy</Button>}
              {sold && <Badge color="red" style={{ color: '#FFF' }}>Sold</Badge>}
            </Group>
          </Group>

          <Text style={{ color: '#FFF' }}>{artwork && artwork.description}</Text>

        </Stack>
      </Group>
    </Stack>

  )
}

export default InformationPane