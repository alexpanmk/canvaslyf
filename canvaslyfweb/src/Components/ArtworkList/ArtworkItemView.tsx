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

const ArtworkItemView = (props: ArtworkItemViewProps) => {
  const { artwork, imageUrl, title, artist, year, description, onBack } = props;

  console.log(artwork);

  const status = isNull(artwork.status) ? 'Available' : artwork.status;

  // Generate random stats
  const totalViews = Math.floor(Math.random() * 20000);
  const totalLikes = Math.floor(Math.random() * 10000);
  const totalTimeViewed = Math.floor(Math.random() * 20000);
  const averageTimeViewed = (Math.random() * 5).toFixed(2);

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
            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>{totalViews}</Title>
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
                <Title size='50'>{totalLikes}</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Total Likes</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Total number of likes for the artwork.
              </Text>
            </Card>

            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>{totalTimeViewed} min</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Total Time Viewed</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Total time the artwork was viewed.
              </Text>
            </Card>

            <Card shadow="sm" padding="lg">
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title size='50'>{averageTimeViewed} minutes</Title>
              </Group>
              <Group style={{ marginBottom: 5, marginTop: 10 }}>
                <Title order={3}>Average Time Viewed / Visitor</Title>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Average time the artwork was viewed per visitor.
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
