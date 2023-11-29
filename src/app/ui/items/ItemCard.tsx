import { ItemPreviewType, LangType } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: ItemPreviewType;
  lang: LangType;
};

export default function ItemCard({ item, lang }: Props) {
  
  const isLangRu = lang === 'ru';
  const langMap = {
    size: {
      am:'Չափս',
      ru: 'Размер'
    },
    price: {
      am:'Արժեք',
      ru: 'Стоимость'
    }
  };
  
  return (
    <article 
      className=" 
        rounded-lg
        bg-gray-200
        p-2
        flex 
        gap-2
        space-x-2
        shadow-sm
      "
    >

      {/* Left side */}
      <section className="w-full space-y-1">
        <Image 
          src={item.photo.src}
          alt="photo"
          width={150}
          height={150}
          className="rounded-md shadow-md"
        />
        <p className="text-amazon">
          <span className="font-bold">{langMap.size[lang]}{': '}</span>
          {item.size.val}{item.size.unit}
        </p>
        <div className="text-amazon flex flex-wrap w-full gap-1">
          <p className="font-bold">{langMap.price[lang]}{': '}</p>
          <p className="flex flex-col -space-y-1">
            <span className={clsx('flex justify-between', item.promo ? 'line-through' : '')}>
              <span>{item.price}</span> 
              <span>&#1423;</span>
            </span>
            {
              item.promo 
              ?
              <span className="flex justify-between">
                <span>{item.promo}</span> 
                <span>&#1423;</span>
              </span>
              : 
              null
            }
          </p>
        </div>
      </section>

      {/* Right side */}
      <section className="h-full w-full space-y-1 relative">
        <h2 className={clsx(
          'text-oxford font-semibold',
          isLangRu ? 'text-lg' : 'text-md'
        )}>
          {item.name}
        </h2>
        <Link 
          href={`/${item.id}`}
          className="
            absolute 
            bottom-1 
            right-1
            bg-oxford
            rounded-md
            px-2
            py-1
            text-white
            hover:opacity-80
            text-sm
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </section>

    </article>
  );
};