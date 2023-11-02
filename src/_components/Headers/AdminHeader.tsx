import { DirectionSwitcher } from '../DirectionSwitcher/DirectionSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

import {
  ActionIcon,
  Box,
  createStyles,
  Drawer,
  Header,
  Stack,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
  burger?: ReactNode;
}

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, .25)',
  },
}));

export function AdminHeader({ burger }: Props) {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Header height={60} withBorder={false} className={classes.header}>
      {burger && burger}
      <TextInput
        placeholder='Search'
        variant='filled'
        icon={<IconSearch size='0.8rem' />}
      />
      <Box sx={{ flex: 1 }} />
      <ActionIcon onClick={open}>
        <IconSettings size='1.25rem' />
      </ActionIcon>

      <Drawer opened={opened} onClose={close} title='Settings' position='right'>
        <Stack spacing='lg'>
          <ThemeSwitcher />
          <DirectionSwitcher />
        </Stack>
      </Drawer>
    </Header>
  );
}
