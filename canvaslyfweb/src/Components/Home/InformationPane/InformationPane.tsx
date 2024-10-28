import React, { useState } from 'react'
import { Badge, Button, Tabs, Title, Stack, Group, Image, TextInput, ActionIcon, ScrollArea, Text } from '@mantine/core';
import { IconHeart, IconHeartFilled, IconPencil, IconMessage } from '@tabler/icons-react';
import { isNull } from '../../../functions/functions';

import Comments from './Comments';


const InformationPane = (props: any) => {

  // const [centerPieceInFocus, setCenterPieceInFocus] = useState(true)

  const artwork = isNull(props.artwork) ? null : props.artwork;
  const centerPieceInFocus = isNull(props.centerPieceInFocus) ? {} : props.centerPieceInFocus;





  // if (isNull(artwork?.id)) return <></>;

  const sold = isNull(artwork?.status) ? false : artwork?.status;

  return (
    <Stack style={{ gap: 20, height: '100%' }}>
      <Title order={2} style={{ color: '#FFF' }}>{!artwork || centerPieceInFocus ? 'Welcome to Canvas by lyf' : 'Artwork Information'}</Title>


      {centerPieceInFocus && <Stack style={{ overflow: 'auto', height: '100%' }}>
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




      {artwork && <Stack style={{ gap: 20, flex: 1, overflow: 'auto' }}>
        {/* <Image src={artwork && artwork.file} alt="Artwork" style={{ width: 200, height: 200, objectFit: 'cover' }} /> */}
        <Stack style={{ gap: 10 }}>
          {/* <Text style={{ color: '#FFF' }}>{artwork && artwork.title}</Text> */}
          <Title order={3} style={{ color: '#FFF' }}>{artwork && artwork.title}</Title>
          <Text style={{ color: '#FFF' }}>{artwork && artwork.artist}</Text>

          <Group style={{ gap: 10, justifyContent: 'space-between' }}>
            <Title order={2} style={{ color: '#FFF' }}>
              {artwork && artwork.price && `$${artwork.price.toLocaleString()}`}
            </Title>
            <Group style={{ gap: 10 }}>
              {/* <ActionIcon color="red" radius="xl">
                {props.liked ? <IconHeartFilled color="red" /> : <IconHeart />}
              </ActionIcon> */}
              {/* likes badge */}
              <Badge leftSection={<IconHeart />} color="blue" variant="light">
                Like
              </Badge>
              {!sold && <Button onClick={() => props.onBuy(artwork.id)} color="green">Buy</Button>}
              {sold && <Badge color="red" style={{ color: '#FFF' }}>Sold</Badge>}
            </Group>
          </Group>




          <Tabs defaultValue={"description"} style={{ color: '#FFF' }}>
            <Tabs.List style={{ width: '100%' }}>
              <Tabs.Tab value="description" leftSection={<IconPencil />}>
                Description
              </Tabs.Tab>
              <Tabs.Tab value="artistInfo" leftSection={<IconMessage />}>
                Artist Info
              </Tabs.Tab>
              <Tabs.Tab value="comments" leftSection={<IconMessage />}>
                Comments
              </Tabs.Tab>


            </Tabs.List>

            <Tabs.Panel value="description">
              <Stack mt={20} style={{ gap: 20 }}>
                <Text style={{ color: '#FFF' }}>{artwork && artwork.description}</Text>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="artistInfo">
              <Stack mt={20} style={{ gap: 20 }}>
                <Text style={{ color: '#FFF' }}>{artwork && artwork.artistInfo}</Text>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="comments">
              <Stack mt={20} style={{ gap: 20 }}>
                <Comments />
              </Stack>
            </Tabs.Panel>


          </Tabs>
        </Stack>
      </Stack>}
    </Stack>

  )
}

export default InformationPane