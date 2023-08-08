import Image from 'next/image';

type Props = {
  image: string;
};

export default function SelectedImage({ image }: Props) {
  return (
    <section style={{ position: 'relative', aspectRatio: '1 / 1' }}>
      <Image alt='Main product' src={image} fill={true} style={{ objectFit: 'cover' }} />
    </section>
  );
}
