import Image from 'next/image';
import type { FC } from 'react';
type Data = {
  image: string;
  name: string;
};
const ImageBanner: FC<{ data: Data }> = ({ data }) => {
  return (
    <div>
      <Image
        src={data.image}
        width={100}
        height={100}
        alt={data.name}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default ImageBanner;
