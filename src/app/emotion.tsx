'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode } from 'react';

export default function RootStyleRegistry({ children }: { children: ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
