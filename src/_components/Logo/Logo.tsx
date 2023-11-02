import { Flex } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';
interface Props {
  width?: string;
  height?: string;
}

export const Logo: FC<Props> = () => {
  return (
    <Flex direction='row' align='center' gap={4}>
      <a
        className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
        href='https://www.softwareone.com/de-de'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/softwareone-logo-blk.svg'
          alt='SoftwareONE Logo'
          className='dark:invert'
          width={100}
          height={24}
          priority
        />
      </a>
    </Flex>
  );
};
