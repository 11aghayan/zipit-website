'use client';

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import navRoutes from "@/util/navRoutes";
import flagArm from '@/assets/flag-arm.svg';
import flagRus from '@/assets/flag-rus.svg';

type Props = {
  params: {
    lang: 'am' | 'ru';
  }
}

export default function Navbar({ params }: Props) {
  const pathname = usePathname().split('/');
  const page = pathname[2];
  const pathRu = pathname.map(elm => elm === 'am' || elm === 'ru' ? 'ru' : elm).join('/');
  const pathAm = pathname.map(elm => elm === 'am' || elm === 'ru' ? 'am' : elm).join('/');

  return (
    <nav className="flex items-center gap-x-7 bg-[#001E3D] pl-8 pr-4 py-3">
      {
        navRoutes.map(route => (
          <Link
            key={route.path}
            href={route.path}
            className={clsx(
              'text-x',
              page === route.path ? 'text-saffron' : 'text-white' 
            )}
          >
            {route.label[params.lang]}
          </Link>
        ))
      }
      <section className="flex flex-col justify-center items-center gap-3 text-xl text-white">
        <Link
          href={pathAm}
        >
          <Image 
            src={flagArm}
            alt='armenian flag'
            width={25}
            height={18}
          />
        </Link>
        <Link
          href={pathRu}
        >
          <Image 
            src={flagRus}
            alt='russian flag'
            width={25}
            height={18}
          />
        </Link>
      </section>
    </nav>
  );
};