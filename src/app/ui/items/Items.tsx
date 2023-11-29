import { ItemPreviewType, LangType } from "@/lib/types";
import ItemCard from "./ItemCard";

type Props = {
  lang: LangType;
}

export default function Items({ lang }: Props) {

  const items: ItemPreviewType[] = [];

  for (let i = 0; i < 12; i++) {
    const item: ItemPreviewType = {
      id: '1241343134',
      // category: {
      //   id: '2311412412',
      //   name: 'category'
      // },
      name: 'capki podshipniki vtulki',
      photo: {
        color: 'sev',
        qty: 10,
        src: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
      },
      price: 10000,
      promo: 5000,
      size: {
        unit: 'cm',
        val: 100
      }
    };
    items.push(item);
  }
  
  return (
    <section
      className="h-full grid grid-cols-4 gap-4"
    >
      {
        items.map((item, index) => (
          <ItemCard 
            key={index}
            item={item}
            lang={lang}
          />
        ))
      }
    </section>
  );
};