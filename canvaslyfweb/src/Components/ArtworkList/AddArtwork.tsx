import React, { useState } from 'react';
import { Stack, Checkbox, rem, Text, Container, Stepper, Button, Group, TextInput, Textarea } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';

import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useDisclosure } from '@mantine/hooks';

import { addArtwork } from '../../service/artwork';

const AddArtwork: React.FC = () => {
  const [active, setActive] = useState(0);
  const [artworkDetails, setArtworkDetails] = useState({
    title: '',
    artistName: '',
    medium: '',
    dimensions: '',
    year: '',
    description: '',
    imageUrl: '',
    price: '',
    agreement: false,
  });
  const [artworkFile, setArtworkFile] = useState<File | null>(null);

  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArtworkDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };


  //Validation
  const handleSubmit = async () => {
    try {
      const artworkId = await addArtwork(artworkDetails, artworkFile).then((id) => {
        console.log(artworkId)
      })
    } catch (e) {
      console.error('Error adding artwork: ', e);
    }
  }

  return (
    <Container h='500'>
      <Stepper h={'80%'} active={active} onStepClick={setActive} >
        <Stepper.Step label="First step" description="Artwork Details">
          <Stack>
            <TextInput
              label="Title"
              placeholder="Enter artwork title"
              name="title"
              value={artworkDetails.title}
              onChange={handleChange}
            />
            <TextInput
              label="Artist Name"
              placeholder="Enter artist name"
              name="artistName"
              value={artworkDetails.artistName}
              onChange={handleChange}
            />
            <TextInput
              label="Medium"
              placeholder="Enter Medium"
              name="medium"
              value={artworkDetails.medium}
              onChange={handleChange}
            />
            <TextInput
              label="Dimensions (cm)"
              placeholder="Enter Dimensions"
              name="dimensions"
              value={artworkDetails.dimensions}
              onChange={handleChange}
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Artwork File and Description">
          <Dropzone
            onDrop={(files) => {
              const file = files[0];
              const reader = new FileReader();
              reader.onload = (event) => {
                setArtworkFile(file);
              };
              reader.readAsDataURL(file);
            }}
            accept={IMAGE_MIME_TYPE}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <IconUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Image in JPG or PNG format not exceeding 150mb
                </Text>
              </div>
            </Group>
          </Dropzone>
          <Textarea
            label="Description"
            placeholder="Enter artwork description"
            name="description"
            value={artworkDetails.description}
            onChange={handleChange}
          />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Price and Agreement">
          <Stack>
            <TextInput
              label="Price"
              placeholder="Enter artwork price"
              name="price"
              value={artworkDetails.price}
              onChange={(e) => handleChange(e)}
            />
            <Checkbox
              label="I accept the commission arrangements, terms, and conditions"
              name="agreement"
              checked={artworkDetails.agreement}
              onChange={(e) => {
                console.log(e.currentTarget.checked)
                setArtworkDetails((prevDetails) => ({
                  ...prevDetails,
                  agreement: e.currentTarget.checked,
                }))
              }}
            />
          </Stack>
        </Stepper.Step>
      </Stepper>

      <Group justify='flex-end'>
        <Button variant="default" onClick={prevStep}>Back</Button>
        {active !== 2 && <Button variant="default" onClick={nextStep}>Next</Button>}
        {active === 2 && <Button onClick={handleSubmit}>Submit</Button>}

      </Group>

    </Container >
  );
};

export default AddArtwork;