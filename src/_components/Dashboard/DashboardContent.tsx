'use client';

import { OverviewCard } from './OverviewCard';
import { ProfileCard } from './ProfileCard';
import { WelcomeCard } from './WelcomeCard';
import { StatsGroup } from '../StatsGroup';
import { mockData } from '../StatsGroup/mock';

import { Flex, Grid } from '@mantine/core';

export function DashboardContent() {
  return (
    <Grid>
      <Grid.Col span={4}>
        <ProfileCard />
      </Grid.Col>
      <Grid.Col span={8}>
        <Flex direction='column' h='100%' justify='space-between'>
          <WelcomeCard />
          <StatsGroup data={mockData} />
        </Flex>
      </Grid.Col>
      <Grid.Col span={4}>
        <OverviewCard />
      </Grid.Col>
    </Grid>
  );
}
