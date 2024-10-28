// import React from 'react';
import { Textarea, Button, Card, Text, Group, Title } from '@mantine/core';

const Comments = () => {
  const sampleComments = [
    { user: 'Resident - Kelly R.', text: 'The Spaceman really resonates with me. It feels like it captures the mystery and vastness of space, yet there’s something so human in the expression. Beautiful work, Jahan!' },
    { user: 'Visitor - Ben S.', text: 'Love the retro-futuristic vibe! The color palette and the intense gaze make it feel like the spaceman is staring into your soul. It’s surreal and captivating' },
    { user: 'Marcus T.', text: 'Every time I pass by this piece, I feel like I’m seeing a snapshot of an intergalactic story. It’s like the Spaceman has seen things beyond our comprehension. Inspiring and thought-provoking!' }
  ];

  return (
    <Card shadow="sm" padding="lg" style={{ gap: 20 }}>
      <Text size="lg" mb="md">Comments</Text>
      <div>
        {sampleComments.map((comment, index) => (
          <Card shadow="sm" padding="md" mt="md" key={index} style={{ gap: 20 }}>
            {/* <Text size="sm" weight={500}>{comment.user}</Text> */}
            <Title order={5}>{comment.user}</Title>
            <Text size="sm">{comment.text}</Text>
          </Card>
        ))}
      </div>
      <Textarea
        placeholder="Write your comment..."
        label="Your Comment"
        required
        mb="md"
      />
      <Group>
        <Button variant="outline">Submit</Button>
      </Group>
    </Card>
  );
}

export default Comments;