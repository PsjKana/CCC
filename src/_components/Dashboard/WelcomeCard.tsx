import { Card, List, Space, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function WelcomeCard() {
  return (
    <Card radius='md'>
      <Title order={5}>Welcome back!</Title>
      <Text fz='sm' c='dimmed' fw='500' data-testid='dashboard-button'>
          Dashboard
      </Text>
      <Space h='sm' />
      <List
        center
        size='sm'
        spacing='sm'
        icon={
          <ThemeIcon color='green.3' size={22} radius='xl'>
            <IconCircleCheck size='1rem' />
          </ThemeIcon>
        }
      >
        <List.Item>Todo Task 1</List.Item>
        <List.Item>Todo Task 2</List.Item>
        <List.Item>Todo Task 3</List.Item>
      </List>
    </Card>
  );
}
