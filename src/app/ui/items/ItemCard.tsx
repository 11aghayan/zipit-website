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
    <Link 
      href={item.id}
      className=" 
        rounded-lg
        bg-gray-200
        p-2
        flex 
        flex-col
        gap-2
        space-x-2
        shadow-sm
        hover:shadow-lg
        hover:scale-[1.01]
        transition-all
        duration-200
      "
    >

      {/* Top */}
      <section className="w-full flex gap-2">

        {/* Left side */}
        <Image 
          src={item.photo.src}
          alt="photo"
          width={150}
          height={150}
          className="rounded-md shadow-md"
        />

        {/* Right side */}
        <div>
          <p>
            <span className="font-bold text-gray-700">{langMap.size[lang]}{': '}</span>
            <span className="text-gray-900 ">{item.size.val}{item.size.unit}</span>
          </p>
          <div className="flex flex-wrap w-full gap-1">
            <p className="font-bold text-gray-700">{langMap.price[lang]}{': '}</p>
            <p className="flex text-gray-900 flex-col -space-y-1">
              <span className={clsx('flex justify-between', item.promo ? 'line-through' : '')}>
                <span>{item.price}</span> 
                <span>&#1423;</span>
              </span>
              {
                item.promo 
                ?
                <span className="flex justify-between text-emerald-500">
                  <span>{item.promo}</span> 
                  <span>&#1423;</span>
                </span>
                : 
                null
              }
            </p>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="h-full w-full space-y-1">
        <h2 className={clsx(
          'text-gray-900 font-semibold',
          isLangRu ? 'text-lg' : 'text-md'
        )}>
          {item.name}
        </h2>
      </section>

    </Link>
  );
};