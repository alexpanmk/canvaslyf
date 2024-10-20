import React from 'react';
import { Card, Image, Text, Badge, Group, Button } from '@mantine/core';

interface ArtworkItemViewProps {
  imageUrl: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  onBack: () => void;
}

const ArtworkItemView: React.FC<ArtworkItemViewProps> = ({ imageUrl, title, artist, year, description, onBack }) => {
  return (
    <Card shadow="sm" padding="lg">


      <Card.Section>
        <Image src={imageUrl} alt={title} />
      </Card.Section>

      <Group style={{ marginBottom: 5, marginTop: 10 }}>
        <Text>{title}</Text>
        <Badge color="pink" variant="light">
          {year}
        </Badge>
      </Group>

      <Text size="sm" style={{ color: '#555' }}>
        {artist}
      </Text>

      <Text size="sm" style={{ marginTop: 10 }}>
        {description}
      </Text>
      <Button variant="outline" onClick={onBack} style={{ marginBottom: 10 }}>
        Back
      </Button>
    </Card>
  );
};

export default ArtworkItemView;