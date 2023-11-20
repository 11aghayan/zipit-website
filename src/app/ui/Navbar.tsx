'use client';

import navRoutes from "@/util/navRoutes";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  params: {
    lang: 'am' | 'ru';
  }
}

export default function Navbar({ params }: Props) {
  const pathname = usePathname().split('/')[2];

  return (
    <nav className="flex items-center gap-x-7 bg-[#001E3D] pl-8 pr-4 py-3">
      {
        navRoutes.map(route => (
          <Link
            key={route.path}
            href={route.path}
            className={clsx(
              "text-xl text-white",
              {
                'text-saffron': pathname === route.path
              }
            )}
          >
            {route.label[params.lang]}
          </Link>
        ))
      }
      <section className="flex flex-col justify-center items-center gap-3 text-xl text-white">
        <p className="cursor-pointer">
          arm
        </p>
        <p className="cursor-pointer">
          rus
        </p>
      </section>
    </nav>
  );
};