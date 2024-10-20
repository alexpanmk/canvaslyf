import React, { useState } from 'react';
import { Stepper, Button, Group, TextInput, Textarea } from '@mantine/core';

const AddArtwork: React.FC = () => {
  const [active, setActive] = useState(0);
  const [artworkDetails, setArtworkDetails] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArtworkDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} >
        <Stepper.Step label="First step" description="Artwork Title">
          <TextInput
            label="Title"
            placeholder="Enter artwork title"
            name="title"
            value={artworkDetails.title}
            onChange={handleChange}
          />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Artwork Description">
          <Textarea
            label="Description"
            placeholder="Enter artwork description"
            name="description"
            value={artworkDetails.description}
            onChange={handleChange}
          />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Artwork Image URL">
          <TextInput
            label="Image URL"
            placeholder="Enter artwork image URL"
            name="imageUrl"
            value={artworkDetails.imageUrl}
            onChange={handleChange}
          />
        </Stepper.Step>
      </Stepper>

      <Group mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next</Button>
      </Group>
    </div>
  );
};

export default AddArtwork;