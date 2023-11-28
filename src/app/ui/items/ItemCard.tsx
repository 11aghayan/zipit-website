import { ItemPreviewType } from "@/lib/types";

type Props = {
  item: ItemPreviewType;
};

export default function ItemCard({ item }: Props) {
  
  return (
    <article className="border border-black rounded-lg">
      ItemCard
    </article>
  );
};