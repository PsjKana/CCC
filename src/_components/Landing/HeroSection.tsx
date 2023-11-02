'use client';

import { Button, Container, createStyles, Group, rem, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  inner: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: rem(64),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  subtitle: {
    paddingTop: theme.spacing.xl,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 800,
    lineHeight: 1.05,
    fontSize: rem(40),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(26),
      lineHeight: 1.15,
    },
  },

  description: {
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(40),
    paddingRight: rem(40),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(18),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function HeroSection() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container pt='sm' size='lg'>
      <div className={classes.inner}>
        <Title className={classes.title}>Zahnärztekammer Westfalen-Lippe</Title>
        <Title className={classes.subtitle}>
          A Next.js 13 Admin dashboard built with Mantine UI
        </Title>

        <Group mt={40}>
          <Button
            size='lg'
            className={classes.control}
            onClick={() => {
              router.push('/dashboard');
            }}
            rightIcon={<IconArrowRight />}
          >
            Dashboard
          </Button>
          <Button
            variant='outline'
            size='lg'
            className={classes.control}
          >
            Outline Button
          </Button>
        </Group>
      </div>
    </Container>
  );
}
