import Image from 'next/image';
import Spinner from './spinner';
import { useState } from 'react';

export default function Img({
  src,
  objectFit = 'cover',
  layout = 'fill',
  alt = 'this is a image',
  quality = 100,
  style = {},
  priority = false,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spinner />}
      <Image
        onLoad={() => setIsLoading(false)}
        priority={priority}
        src={src}
        objectFit={objectFit}
        layout={layout}
        alt={alt}
        quality={quality}
        style={style}
      />
    </>
  );
}
