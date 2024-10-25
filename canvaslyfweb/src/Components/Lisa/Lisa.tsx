import React, { useState } from 'react';
import { Stack, Group, Image, TextInput, ActionIcon, ScrollArea, Text } from '@mantine/core';
import { useChat } from 'ai/react';
import { Send } from 'tabler-icons-react';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};


const LisaPersona = {
  name: 'Lisa',
  gender: 'Female',
  role: 'Digital Lyf Guard',
  age: 29,
  occupation: 'Digital concierge and art curator for Canvas Lyf',
  personalityTraits: [
    'Friendly and approachable',
    'Culturally savvy and well-versed in contemporary art',
    'Quick problem-solver and highly responsive to visitors’ needs',
    'Adaptive, and able to engage with different personality types',
    'Promotes sustainability and community spirit within the LYF ecosystem'
  ],
  goals: [
    'To engage residents and digital nomads visiting LYF co-living spaces with immersive art experiences',
    'To recommend personalized art exhibits based on residents’ preferences',
    'To provide a seamless and memorable digital experience for LYF residents',
    'To increase brand loyalty and community building through interactions with residents and guests',
    'To help visitors and art lovers discover local talent and cultural art pieces',
    'Lisa empowers visitors to make informed decisions about artwork purchases by offering detailed insights on pricing, artist background, and investment potential, ensuring a seamless buying experience'
  ]
}

const Lisa = (props: any) => {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'http://localhost:3000/api/chat',
    body: {
      persona: LisaPersona,
    },
  });

  // const [inputValue, setInputValue] = useState('');

  // const handleSendMessage = () => {
  //   if (input.trim()) {
  //     handleSubmit();
  //   }
  // };

  return (
    <Stack style={{ height: '100%' }}>
      <Image src="/assets/images/lisa.png" alt="Gallery Placeholder" style={{ width: '100%', height: 250, objectFit: 'cover' }} />
      <Stack style={{ height: '100%', border: '1px solid #FFF', flex: 1, overflow: 'auto' }}>
        <ScrollArea style={{ flex: 1, padding: '10px' }}>
          {messages.map((message, index) => (
            <Group key={index} align={message.role === 'assistant' ? 'flex-end' : 'flex-start'} style={{ marginBottom: '10px' }}>
              <Text style={{ backgroundColor: message.role === 'user' ? '#blue' : '#gray', padding: '10px', borderRadius: '10px', color: '#FFF' }}>
                {`${message.role === 'user' ? 'You' : 'Lisa'}: ${message.content}`}
              </Text>
            </Group>
          ))}
        </ScrollArea>
      </Stack>
      <Group gap={10}>
        <TextInput
          style={{ flex: 1 }}
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
        <ActionIcon color="blue" variant="filled" onClick={handleSubmit}>
          <Send size={16} />
        </ActionIcon>
      </Group>
    </Stack>
  );
};

export default Lisa;