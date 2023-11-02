'use client';

import {
  Container,
  createStyles,
  Paper,
  rem,
  SimpleGrid,
  Space,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandStorybook,
  IconBrandTailwind, IconMasksTheater,
} from '@tabler/icons-react';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import Tilt from 'react-parallax-tilt';

export const featuresData = [
  {
    icon: IconBrandNextjs,
    title: 'Next.js 13',
    link: 'https://nextjs.org/docs',
    description: 'App Dir, Routing, Layouts, Loading UI and API routes.',
  },
  {
    icon: IconBrandReact,
    title: 'React 18',
    link: 'https://react.dev/learn',
    description: 'Server and Client Components.',
  },
  {
    icon: IconBrandTailwind,
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/docs',
    description: 'Utility-first CSS framework',
  },
  {
    icon: IconBrandMantine,
    title: 'Mantine UI',
    link: 'https://mantine.dev/pages/getting-started/',
    description: 'UI components built using Mantine UI.',
  },
  {
    icon: IconBrandStorybook,
    title: 'Storybook',
    link: 'https://storybook.js.org/docs',
    description: 'Authentication using NextAuth.js and middlewares.',
  },
  {
    icon: IconMasksTheater,
    title: 'Playwright',
    link: 'https://playwright.dev/docs/intro',
    description: 'Authentication using NextAuth.js and middlewares.',
  },
];

interface FeatureProps {
  icon: FC<any>;
  title: ReactNode;
  link: string;
  description: ReactNode;
}

export function Feature({ icon: Icon, title, description, link }: FeatureProps) {
  return (
    <Tilt>
      <Link
        href={link}
        key={link}
      >
        <Paper h='100%' shadow='md' px='lg' py='sm' radius='md' withBorder>
          <ThemeIcon variant='light' size={60} radius={60}>
            <Icon size='2rem' stroke={1.5} />
          </ThemeIcon>
          <Text mt='sm' mb={7} fw='600'>
            {title}
          </Text>
          <Text size='sm' color='dimmed' sx={{ lineHeight: 1.6 }}>
            {description}
          </Text>
        </Paper>
      </Link>
    </Tilt>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: rem(60),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: ReactNode;
  description: ReactNode;
  data?: FeatureProps[];
}

export function FeaturesSection({
  title,
  description,
  data = featuresData,
}: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Space h='md' />

      <Container size={560} p={0}>
        <Text size='sm' className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing='xl'
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'xl' },
          { maxWidth: 'sm', cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
