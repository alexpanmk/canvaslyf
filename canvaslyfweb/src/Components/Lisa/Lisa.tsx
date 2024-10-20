import React from 'react'
import { Stack, Group, Image, TextInput, ActionIcon } from '@mantine/core'

const Lisa = (props: any) => {
  return (

    <Stack style={{ height: '100%' }}>
      <Image src="/assets/images/lisa.png" alt="Gallery Placeholder" style={{ width: '100%', height: 250, objectFit: 'cover' }} />
      <Stack style={{ height: '100%', border: '1px solid #FFF' }}>


      </Stack>
      <Group gap={10}>
        <TextInput style={{ flex: 1 }} />
        <ActionIcon color="blue" variant="filled" onClick={() => { }} />
      </Group>

    </Stack>


  )
}

export default Lisa