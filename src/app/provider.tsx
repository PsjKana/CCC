'use client';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useConfigStore } from '@/_stores/config';
import { useGlobalTheme } from '@/_styles/theme';

import RootStyleRegistry from './emotion';

import {
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

const queryClient = new QueryClient();

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export function AppProvider({ children }: { children: ReactNode }) {
  const { colorScheme, direction, setColorScheme } = useConfigStore();
  const theme = useGlobalTheme({ colorScheme });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <QueryClientProvider client={queryClient}>
      <RootStyleRegistry>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            emotionCache={direction === 'rtl' ? rtlCache : undefined}
            theme={{ ...theme, dir: direction }}
          >
            <ModalsProvider>{children}</ModalsProvider>
            <Notifications />
          </MantineProvider>
        </ColorSchemeProvider>
      </RootStyleRegistry>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
