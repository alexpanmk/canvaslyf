import React, { useState, useEffect } from 'react'

import { TextInput, PasswordInput, Paper, Title, Container, Button, Group, Image } from '@mantine/core';

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    props.onLogin(email, password);
  };

  return (
    <Group style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* <Image src="url(/assets/images/loginpageimage.png)" alt="Login Page Image" style={{ flex: 1, maxWidth: '50%' }} /> */}
      <Group style={{
        backgroundImage: 'url(/assets/images/loginpageimage.png)',
        backgroundSize: 'cover', flex: 1, height: '100%', width: '100%'
      }} />

      <Paper style={{ padding: 50, minWidth: 500 }}>
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
    </Group>
  );
};

export default LoginPage;