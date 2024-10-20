import React from 'react'
import { Stack, Group, Image, TextInput, ActionIcon } from '@mantine/core'

import Lisa from '../Lisa/Lisa'

const Home = (props: any) => {
  return (
    <Group style={{
      justifyContent: 'flex-end', gap: 20, height: '100%', flex: 1, padding: 0
      , borderRadius: 20,
    }}>

      <Stack style={{ width: 500, gap: 20, height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 40, borderRadius: 20, backdropFilter: 'blur(10px)' }}>

        {/* Lisa chat */}
        <Lisa />

      </Stack>

    </Group>
  )
}

export default Home