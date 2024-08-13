import Image from 'next/image';
import Spinner from './spinner';
import { useState } from 'react';

export default function Img({
  src,
  alt = 'this is a image',
  quality = 100,
  fill = true,
  objectFit = 'cover',
  style = { objectFit: 'cover' },
  priority = false,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spinner />}
      <Image
        onLoad={() => setIsLoading(false)}
        fill={fill}
        priority={priority}
        src={src}
        alt={alt}
        quality={quality}
        style={style}
      />
    </>
  );
}
