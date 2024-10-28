import React, { useState } from 'react'
import { Stack, Title, Group, TextInput, Button, Select, Grid } from '@mantine/core'

const mockData = {
  email: 'lyfresident@gmail.com',
  phoneNumber: '123-456-7890',
  fullName: 'John Doe',
  streetAddress: '123 Main St',
  city: 'Anytown',
  state: 'State 1',
  zipCode: '12345',
  cardNumber: '4111 1111 1111 1111',
  expirationDate: '12/34',
  cvv: '123'
}

const PurchaseFlow = (props: any) => {
  const [formData, setFormData] = useState(mockData);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Stack style={{ gap: 20, padding: '20px' }}>
      <Title order={2}>Payment</Title>

      <Stack style={{ gap: 10 }}>
        <Title order={4}>Contact Information</Title>
        <TextInput
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </Stack>

      <Stack style={{ gap: 10 }}>
        <Title order={4}>Shipping Address</Title>
        <TextInput
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextInput
          placeholder="Street Address"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
        />
        <TextInput
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <Grid>
          <Grid.Col span={6}>
            <Select
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={(value) => setFormData({ ...formData, state: value ?? '' })}
              data={['State 1', 'State 2', 'State 3']}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              placeholder="ZIP Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </Grid.Col>
        </Grid>
      </Stack>

      <Stack style={{ gap: 10 }}>
        <Title order={4}>Payment Information</Title>
        <TextInput
          placeholder="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              placeholder="Expiration Date (MM/YY)"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              placeholder="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </Grid.Col>
        </Grid>
      </Stack>

      <Group>
        <Button color="blue" variant="light" onClick={() => props.onSuccess()}>Buy</Button>
        <Button color="blue" variant="light" onClick={() => props.onDismiss()}>Cancel</Button>
      </Group>
    </Stack>
  )
}

export default PurchaseFlow