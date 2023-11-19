import Image from 'next/image';

import bg from '@/assets/bg.jpg';

export default function BgImage() {
  return (
    <div
      className='absolute inset-0'
    >
      <Image
        src={bg}
        alt=''
      />
    </div>
  );
}