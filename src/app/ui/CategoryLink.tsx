'use client';

import { CategoryType } from "@/lib/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  category: CategoryType;
}

export default function CategoryLink({ category }: Props) {
  const pathname = usePathname();
  const sp = useSearchParams();
  const newSp = new URLSearchParams(sp);
  newSp.set('categories', category.id);
  const newPath = pathname.split('?')[0] + `?${newSp}`;
  
  return (
    <Link
      href={newPath}
      className="
        flex 
        justify-between 
        items-center 
        text-lg 
        border-y 
        py-1 
        bg-saffron
        border-amazon/25
        hover:brightness-110
        hover:opacity-70
      "
    >
      <p>{category.label}</p>
      <p>({category.itemsQty})</p>
    </Link>
  );
};