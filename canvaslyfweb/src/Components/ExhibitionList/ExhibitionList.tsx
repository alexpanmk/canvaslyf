import React, { useEffect, useState, useMemo } from 'react';
import { SimpleGrid, Grid, Badge, Group, Stack, Modal, Text, Title, Card, Image, Button } from '@mantine/core';

import { getAllExhibitions } from '../../service/exhibitions';

interface Exhibition {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
}

const ExhibitionList = (props: any) => {

  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [selectedExhibition, setSelectedExhibition] = useState<string | null>(null);

  useEffect(() => {
    getAllExhibitions().then((exhibitions: any) => {
      console.log(exhibitions);
      setExhibitions(exhibitions)
    })
  }, [])

  const sortedExhibitions = useMemo(() => {
    return [...exhibitions].sort((a: any, b: any) => {
      console.log(a.startDate, b.startDate)
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }, [exhibitions]);

  return (
    <Stack style={{ height: '100%', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>
      <Title order={1}>Exhibition List</Title>

      <Grid style={{ height: '100%' }}>


        {/* List */}
        <Grid.Col span={4} style={{ height: '100%' }}>
          <Stack style={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>
            <Stack style={{ height: '100%', overflow: 'auto', gap: 20 }}>
              {sortedExhibitions.map((exhibition: any) => (
                <Card onClick={(evt) => {
                  setSelectedExhibition(exhibition.id)
                }
                } key={exhibition.id} shadow="sm" padding="lg" style={{ cursor: 'pointer' }}>
                  <Card.Section>
                    <Image src={exhibition.imageUrl} height={160} alt={exhibition.title} />
                  </Card.Section>
                  <Group style={{ marginBottom: 5, marginTop: 10 }}>
                    <Title order={4}>{exhibition.title}</Title>
                    {/* <Badge color="pink" variant="light">
                {exhibition.category}
              </Badge> */}
                  </Group>
                  <Text size="sm">{exhibition.description}</Text>
                  {/* <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                View Details
              </Button> */}
                </Card>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>

        {/* Detail */}
        <Grid.Col span={8} style={{ height: '100%' }}>
          {selectedExhibition && (() => {
            const exhibition = sortedExhibitions.find((ex: any) => ex.id === selectedExhibition);
            return exhibition ? (
              <Stack style={{ flex: 1, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>
                <Image src={exhibition.imageUrl} height={160} alt={exhibition.title} />
                <Group style={{ marginBottom: 5, marginTop: 10 }}>
                  <Title order={2}>{exhibition.title}</Title>
                  <Group>
                    <Badge color="green" variant="light">
                      {exhibition.startDate}
                    </Badge>
                    <Badge color="red" variant="light">
                      {exhibition.endDate}
                    </Badge>
                  </Group>
                  {/* <Badge color="pink" variant="light">
              {exhibition.category}
              </Badge> */}
                </Group>
                <Text size="sm">{exhibition.description}</Text>
                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                  View Details
                </Button>
              </Stack>
            ) : null;
          })()}
        </Grid.Col>


      </Grid>
    </Stack>
  )
}

export default ExhibitionList