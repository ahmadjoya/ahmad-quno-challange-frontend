import Image from 'next/image';
import type { FC } from 'react';

const Icon: FC<{ link: string }> = ({ link }) => {
  return (
    <>
      <Image src={link} width={30} height={30} alt="Check Icon" />
    </>
  );
};

export default Icon;
