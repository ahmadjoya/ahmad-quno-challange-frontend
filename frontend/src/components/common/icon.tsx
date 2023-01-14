import Image from 'next/image';
import type { FC } from 'react';

const Icon: FC = () => {
  return (
    <>
      <Image src="/images/check.svg" width={30} height={30} alt="Check Icon" />
    </>
  );
};

export default Icon;
