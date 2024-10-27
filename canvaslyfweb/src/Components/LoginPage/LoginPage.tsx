import React, { useState, useEffect } from 'react'

import { SegmentedControl, TextInput, PasswordInput, Paper, Title, Container, Button, Group, Image } from '@mantine/core';

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Visitor');

  const handleLogin = () => {
    // Handle login logic here
    props.onLogin(email, password, role);
  };

  const handleSegmentChange = (value) => {
    // Handle segment change logic here
    switch (value) {
      case 'Visitor':
        setEmail('lyfresident@gmail.com');
        setPassword('123456789');
        setRole('visitor');
        break;
      case 'Artist':
        setEmail('jahanloh@gmail.com');
        setPassword('pHYTOyV1GGi1XZZSKqby');
        setRole('artist');
        break;
      case 'lyf Admin':
        setEmail('admin@lyf.com.sg');
        setPassword('123456789');
        setRole('lyfAdmin');

    }
  }

  return (
    <Group style={{ gap: 0, display: 'flex', height: '100vh', width: '100vw' }}>
      {/* <Image src="url(/assets/images/loginpageimage.png)" alt="Login Page Image" style={{ flex: 1, maxWidth: '50%' }} /> */}
      <Group style={{
        backgroundImage: 'url(/assets/images/loginpageimage.png)',
        backgroundSize: 'cover', flex: 1, height: '100%', width: '100%'
      }} />

      <Paper style={{ alignContent: 'center', justifyContent: 'center', padding: 50, minWidth: 500, height: '100%' }}>
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
          value={'123456789'}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          mt="md"
        />
        {/* Login shortcuts for judges */}
        <SegmentedControl
          onChange={handleSegmentChange}
          w={'100%'} mt={20} data={['Visitor', 'Artist', 'lyf Admin']} />
        <Group mt="md">
          <Button onClick={handleLogin}>Login</Button>
        </Group>
      </Paper>
    </Group>
  );
};

export default LoginPage;