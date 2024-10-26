import React, { useState } from 'react';
import { SimpleGrid, Badge, Group, Stack, Modal, Text, Title, Card, Image, Button } from '@mantine/core';
import { AreaChart, PieChart } from '@mantine/charts';

const data = [

  {
    month: 'Jun 2024',
    Residents: 260,
    Public: 500,
  },
  {
    month: 'Jul 2024',
    Residents: 270,
    Public: 510,
  },
  {
    month: 'Aug 2024',
    Residents: 280,
    Public: 520,
  },
  {
    month: 'Sep 2024',
    Residents: 290,
    Public: 530,
  },
  {
    month: 'Oct 2024',
    Residents: 300,
    Public: 540,
  },
]

const pieData = [
  {
    name: 'Ticketed Exhibitions',
    value: 20,
    color: 'blue',
  },
  {
    name: 'Artwork Commissions',
    value: 40,
    color: 'red',
  },
  {
    name: 'Artists Listing Fees',
    value: 20,
    color: 'green',
  },
  {
    name: 'Artist Pro Plan Subscription Fees',
    value: 20,
    color: 'yellow',
  }
]

const LyfRevenueDashboard = (props: any) => {
  return (
    <Stack style={{ height: '100%', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>
      <Group justify='space-between'>
        <Title order={1}>{`Revenue Reporting Dashboard`}</Title>
        {/* <Button color="blue" onClick={() => setModalOpened(true)}>Add Artwork</Button> */}
      </Group>

      <SimpleGrid cols={3} spacing="lg">
        <Card shadow="sm" padding="lg">
          {/* <Card.Section>
            <Image src="https://via.placeholder.com/150" height={160} alt="Revenue" />
          </Card.Section> */}
          <Group style={{ marginBottom: 5, marginTop: 10 }}>
            <Title size='50'>$122,400</Title>
          </Group>
          <Group style={{ marginBottom: 5, marginTop: 10 }}>
            <Title order={3}>Year-to-date Revenue</Title>
            {/* <Badge color="green" variant="light">
              Updated
            </Badge> */}
          </Group>
          <Text size="sm" style={{ lineHeight: 1.5 }}>
            Total revenue generated from ticketed exhibitions, artwork commissions, artists listing fees, and artist pro plan subscription fees.
          </Text>
        </Card>
        <Card shadow="sm" padding="lg">
          {/* <Card.Section>
            <Image src="https://via.placeholder.com/150" height={160} alt="Revenue" />
          </Card.Section> */}
          <Group style={{ marginBottom: 5, marginTop: 10 }}>
            <Title size='50'>$62,800</Title>
          </Group>
          <Group style={{ marginBottom: 5, marginTop: 10 }}>
            <Title order={3}>Year to date Operating Expenses</Title>
            {/* <Badge color="green" variant="light">
              Updated
            </Badge> */}
          </Group>
          <Text size="sm" style={{ lineHeight: 1.5 }}>
            Platform expenses (Firebase, OpenAI), marketing, artists payouts, and other operating expenses for Canvas.
          </Text>
        </Card>
        <Card shadow="sm" padding="lg">
          {/* <Card.Section>
            <Image src="https://via.placeholder.com/150" height={160} alt="Revenue" />
          </Card.Section> */}
          <Group style={{ marginBottom: 5, marginTop: 10 }}>
            <Title size='50'>$59,600</Title>
          </Group>
          <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
            <Title order={3}>Year-to-Date Operating Income</Title>
            {/* <Badge color="green" variant="light">
              Updated
            </Badge> */}
          </Group>
          <Text size="sm" style={{ lineHeight: 1.5 }}>
            Operating income is the revenue generated after deducting operating expenses from total revenue.
          </Text>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={2} spacing="lg" style={{ flex: 1 }}>
        <Card shadow="sm" padding="lg">
          <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
            <Title order={3}>Visitor Traffic (Unique)</Title>
            {/* <Badge color="green" variant="light">
              Updated
            </Badge> */}
          </Group>
          <Card.Section>

            <AreaChart
              mt={40}
              mr={40}
              h={'300'}
              flex={1}
              data={data}
              dataKey='month'
              series={
                [
                  { name: 'Residents', color: 'blue' },
                  { name: 'Public', color: 'red' }
                ]
              }
            />
          </Card.Section>
          {/* <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
            <Title order={3}>Visitor Traffic (Unique)</Title>
            <Badge color="green" variant="light">
              Updated
            </Badge>
          </Group> */}
          <Stack mt={40}>
            <Text size="sm" style={{ lineHeight: 1.5 }}>
              Number of visitors, comprising residents and public visitors, to the Canvas platform.
            </Text>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg">

          <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
            <Title order={3}>Revenue Breakdown</Title>
            <Badge color="green" variant="light">
              Updated
            </Badge>
          </Group>
          {/* <Card.Section style={{ flexDirection: 'row' }}> */}
          <Group flex={1} p={20}>
            <PieChart
              mt={40}
              mb={40}
              h={300}
              w={300}
              data={pieData}
              // withLabelsLine labelsPosition="inside" labelsType="percent"
              // withLabels
              // withTooltip
              // tooltipProps={{ labelStyle: { backgroundColor: '#FFF' } }}
              size={300}

            />
            <Stack ml={20}>
              {pieData.map((item) => (
                <Group key={item.name} style={{ justifyContent: 'space-between' }}>
                  <Badge color={item.color} variant="filled">
                    {item.name}
                  </Badge>
                  <Text>{item.value}%</Text>
                </Group>
              ))}
            </Stack>
          </Group>
          {/* </Card.Section> */}
          <Text size="sm" style={{ lineHeight: 1.5 }}>
            Revenue sources include ticketed exhibitions, artwork commissions, artists listing fees, and artist pro plan subscription fees.
          </Text>
        </Card>
      </SimpleGrid>


    </Stack>
  )
}

export default LyfRevenueDashboard

