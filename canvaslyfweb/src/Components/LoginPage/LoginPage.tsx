import React, { useState, useEffect } from 'react'

import { TextInput, PasswordInput, Paper, Title, Container, Button, Group, Image } from '@mantine/core';

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Container size="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Image src="/path/to/loginpageimage.jpg" alt="Login Page Image" style={{ flex: 1, maxWidth: '50%' }} />
      <Paper style={{ padding: 20, flex: 1, maxWidth: '50%' }}>
        <Title order={2} mb="lg">Login</Title>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          mt="md"
        />
        <Group mt="md">
          <Button onClick={handleLogin}>Login</Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default LoginPage;