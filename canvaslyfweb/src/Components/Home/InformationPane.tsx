import React from 'react'
import { Badge, Button, Tabs, Title, Stack, Group, Image, TextInput, ActionIcon, ScrollArea, Text } from '@mantine/core';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { isNull } from '../../functions/functions';



const InformationPane = (props: any) => {

  const artwork = isNull(props.artwork) ? {} : props.artwork;
  const centerPieceInFocus = isNull(props.centerPieceInFocus) ? {} : props.centerPieceInFocus;


  console.log(artwork.id);

  if (isNull(artwork.id)) return <></>;

  const sold = isNull(artwork.status) ? false : artwork.status;

  return (
    <Stack style={{ gap: 20, height: '100%' }}>
      <Title order={2} style={{ color: '#FFF' }}>{centerPieceInFocus ? 'Welcome to Canvas by lyf' : 'Artwork Information'}</Title>


      {centerPieceInFocus &&
        <Stack style={{ overflow: 'auto', height: '100%' }}>
          <Image src="/assets/images/lyflogo.png" alt="Artwork" style={{ width: '100%', objectFit: 'cover' }} />
          {/* <Stack style={{ gap: 20, padding: 20, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)' }}> */}
          <ScrollArea style={{ height: '100%' }}>
            <Stack style={{ gap: 20, padding: 20 }}>
              <Text style={{ fontSize: 18, color: '#FFF' }}>Step into a new world of art and culture, where creativity meets community in the vibrant setting of Lyf Funan, Singapore. Canvas by Lyf is a digital gallery designed to break spatial boundaries, inviting you to explore, connect, and be inspired by the works of emerging and established artists.</Text>
              <Text style={{ fontSize: 18, color: '#FFF' }}>In this space, art isn’t confined to walls. It flows freely across digital canvases, interactive installations, and augmented reality experiences, allowing you to discover perspectives, stories, and cultures from around the world. Here, each artwork has a story, and every visitor is part of a growing creative community.</Text>

            </Stack>
          </ScrollArea>
          {/* </Stack> */}
        </Stack>
      }




      {!centerPieceInFocus && <Group style={{ gap: 20, flex: 1, overflow: 'auto' }}>
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
      </Group>}
    </Stack>

  )
}

export default InformationPane