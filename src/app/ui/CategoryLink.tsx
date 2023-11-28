'use client';

import { CategoryType } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  category: CategoryType;
}

export default function CategoryLink({ category }: Props) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const sp = useSearchParams();
  const newSp = new URLSearchParams(sp);
  newSp.set('categories', category.id);
  const newPath = pathname.split('?')[0] + `?${newSp}`;
  
  return (
    <Link
      href={newPath}
      className={clsx(`
        categoryContainer
        flex 
        justify-between 
        items-center 
        gap-1
        text-lg 
        border-y 
        p-1 
        border-amazon/25
        hover:bg-amazon
        hover:text-saffron
        transition-colors
        duration-75
      `,
      lang === 'am' ? 'text-lg' : 'text-xl',
      sp.get('categories') === category.id ? 'text-saffron bg-amazon' : 'text-amazon bg-saffron'
      )}
    >
      <p>{category.label}</p>
      <p>({category.itemsQty})</p>
    </Link>
  );
};