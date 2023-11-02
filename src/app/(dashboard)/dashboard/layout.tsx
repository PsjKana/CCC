'use client';

import { AdminHeader } from '@/_components/Headers/AdminHeader';
import { Navbar } from '@/_components/Navbar/Navbar';

import { AppShell, Burger, Container, Footer, MediaQuery, Text } from '@mantine/core';
import { ReactNode, useState } from 'react';
import { navLinks } from 'src/_config';

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      layout='alt'
      sx={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        },
      })}
      navbar={<Navbar data={navLinks} hidden={!opened} />}
      navbarOffsetBreakpoint='sm'
      header={
        <AdminHeader
          burger={
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                mr='xl'
              />
            </MediaQuery>
          }
        />
      }
      footer={
        <Footer height={50} p='md'>
          <Text w='full' size='sm' align='center' color='gray'>
              CopyRight © 2023 SoftwareOne
          </Text>
        </Footer>
      }
    >
      <Container fluid>{children}</Container>
    </AppShell>
  );
}
