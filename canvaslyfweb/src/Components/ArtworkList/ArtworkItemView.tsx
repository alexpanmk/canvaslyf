import React from 'react';
import { Title, Stack, Card, Image, Text, Badge, Group, Button, SimpleGrid } from '@mantine/core';
import { isNull } from '../../functions/functions';

interface ArtworkItemViewProps {
  artwork: any;
  imageUrl: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  onBack: () => void;
}

const ArtworkItemView = (props) => {

  // { artwork, imageUrl, title, artist, year, description, onBack }
  const { artwork, imageUrl, title, artist, year, description, onBack } = props;

  console.log(artwork);

  const status = isNull(artwork.status) ? 'Available' : artwork.status;

  return (


    <Stack>
      <SimpleGrid cols={2} style={{ gap: 10, padding: 20, backgroundColor: '#FFF' }}>
        <Card shadow="sm" padding="lg">


          <Card.Section>
            <Image src={artwork.file} alt={title} />
          </Card.Section>

          <Group style={{ marginBottom: 5, marginTop: 10 }}>
            <Text>{title}</Text>
            <Badge color="pink" variant="light">
              {year}
            </Badge>
          </Group>

          {/* <Text size="sm" style={{ color: '#555' }}>
            {artist}
          </Text>

          <Text size="sm" style={{ marginTop: 10 }}>
            {description}
          </Text> */}

        </Card>


        <SimpleGrid cols={1} style={{ gap: 10, padding: 20, backgroundColor: '#FFF' }}>

          <Card shadow="sm" padding="lg">
            <Group style={{ marginBottom: 5, marginTop: 10, justifyContent: 'space-between' }}>
              <Title order={3}>{artwork.title}</Title>
              {status === 'Sold' && <Badge color="red">Sold</Badge>}
              {status === 'Available' && <Badge color="green">Available</Badge>}
            </Group>
            <Group style={{ marginBottom: 5, marginTop: 10 }}>
              <Title size='50'>{`$${artwork.price}`}</Title>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              {description}
            </Text>
          </Card>


          <SimpleGrid mb={20} cols={2} style={{ gap: 10 }}>
            {/* Total Views */}
            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>12,450</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Total Views</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Total number of views for the artwork.
              </Text>
            </Card>

            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>4,320</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Total Likes</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Total number of views for the artwork.
              </Text>
            </Card>
            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>9,880min</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Total Time Viewed</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Total number of views for the artwork.
              </Text>
            </Card>
            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>345</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Average Time Viewed / Visitor</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Average time the artwork was viewed.
              </Text>
            </Card>

          </SimpleGrid>
          <Button variant="outline" onClick={onBack} style={{ marginBottom: 10 }}>
            Back
          </Button>
        </SimpleGrid>
      </SimpleGrid>
    </Stack>
  );
};

export default ArtworkItemView;