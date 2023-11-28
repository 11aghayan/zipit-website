import { ItemPreviewType } from "@/lib/types";
import ItemCard from "./ItemCard";

export default function Items() {

  const items: ItemPreviewType[] = [];

  for (let i = 0; i < 12; i++) {
    const item: ItemPreviewType = {
      id: '1241343134',
      category: {
        id: '2311412412',
        name: 'category'
      },
      name: 'product',
      photo: {
        color: 'sev',
        qty: 10,
        src: '#'
      },
      price: 10000,
      promo: null,
      size: {
        unit: 'cm',
        val: 100
      }
    };
    items.push(item);
  }
  
  return (
    <section
      className="h-full grid grid-cols-4 gap-2"
    >
      {
        items.map((item, index) => (
          <ItemCard 
            key={index}
            item={item}
          />
        ))
      }
    </section>
  );
};