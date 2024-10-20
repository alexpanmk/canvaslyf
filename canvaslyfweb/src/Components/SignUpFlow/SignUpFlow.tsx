import React, { useEffect, useState } from 'react'
import { Group, Stack, Modal, Text, Title, Stepper } from '@mantine/core'
import { useForm } from '@mantine/form';


const SignUpFlow = (props: any) => {
  const signUpType = props.signUpType

  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));



  if (signUpType === 'artist') return (
    <Modal opened title="Artist Sign Up" style={{ minWidth: 400 }}>

      <Stepper activeStep={active} onStep={setActive}>
        <Stepper.Step label="Step 1" onClick={() => setActive(1)} />
        <Stepper.Step label="Step 2" onClick={() => setActive(2)} />
        <Stepper.Step label="Step 3" onClick={() => setActive(3)} />
      </Stepper>





      {/* <Stack >
        <Title order={1}>Artist Sign Up</Title>
        <Text>Create an account to start selling your art</Text>
      </Stack> */}
    </Modal>

  )
}

export default SignUpFlow