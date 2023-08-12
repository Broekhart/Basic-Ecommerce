import { ImagesEntityOrImage } from '@/shared/types/product';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/product/Product.module.css';

type Props = {
  images: ImagesEntityOrImage[] | null | undefined;
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
};

export default function VariantImages({ images, selectedImage, setSelectedImage }: Props) {
  return (
    <section className={styles.variants}>
      {images?.map((image) => (
        <Image
          onClick={() => setSelectedImage(image.src)}
          alt='image'
          src={image.src}
          height={120}
          width={100}
          key={image.id}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
            border: selectedImage === image.src ? '1px solid rgba(0, 0, 0, 0.50)' : '1px solid transparent',
          }}
        />
      ))}
    </section>
  );
}
