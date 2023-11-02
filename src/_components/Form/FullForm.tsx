'use client';

import { Box, Button, Paper, PasswordInput, Space, Text, TextInput } from '@mantine/core';

const FullForm = () => {
  return (
    <Paper withBorder shadow='md' p='md' w='600px'>
      <Box<'form'>>
        <Text<'h2'> component='h2' fw='bold' fz='lg'>Full Form</Text>
        <Space h='sm' />
        <TextInput label='Address' required/>
        <Space h='sm' />
        <TextInput label='ZIP' required/>
        <Space h='sm' />
        <TextInput label='Location' required/>
        <Space h='sm' />
        <TextInput label='City' required/>
        <Space h='sm' />
        <TextInput label='Country' required/>
        <Space h='sm' />
        <TextInput label='Email' placeholder='test@example.com' required />
        <PasswordInput label='Password' placeholder='Your password' required mt='md' />
        <Space h='sm' />
        <PasswordInput label='Password' placeholder='Repeat your password' required mt='md' />
        <Space h='sm' />
        <Text component='p' color='gray' size='sm'>We will send you a confirmation email</Text>
        <Space h='md' />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button>Register</Button>
      </Box>
    </Paper>
  );
};

export default FullForm;
