'use client';

import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  createStyles,
  Flex,
  Group,
  Menu,
  rem,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const useStyle = createStyles((theme) => ({
  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function ProfileCard() {
  const { classes } = useStyle();

  return (
    <Card radius='md'>
      <Card.Section className={classes.section}>
        <Group position='apart'>
          <Avatar radius='xl'></Avatar>
          <Menu withinPortal position='bottom-end' shadow='sm'>
            <Menu.Target>
              <ActionIcon>
                <IconDots size='1rem' />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={rem(14)} />}>Action One</Menu.Item>
              <Menu.Item icon={<IconEye size={rem(14)} />}>Action Two</Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color='red'>
                Action Three
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Space h='md' />

        <Flex direction='column'>
          <Title order={5}>Sea-Jong Park</Title>
          <Space h='xs' />
          <Text fz='sm' c='dimmed' fw='500'>
            sea-jong.park@softwareone.com
          </Text>
          <Space h='4' />
        </Flex>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group position='apart' grow>
          <Stack spacing={4}>
            <Text fz='sm' fw='500'>
              Role
            </Text>
            <Title order={3}>
              Application Developer
            </Title>
          </Stack>
          <Stack spacing={4}>
            <Text fz='sm' fw='500'>
              Squad
            </Text>
            <Title order={3}>CMS</Title>
          </Stack>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group position='center'>
          <Button variant='light'>Update</Button>
          <Button>Delete</Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
