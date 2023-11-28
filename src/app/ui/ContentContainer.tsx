import { LangType } from "@/lib/types";
import PageNav from "@/app/ui/pageNav/PageNav";
import Items from "@/app/ui/items/Items";

type Props = {
  lang: LangType;
}

export default function ContentContainer({ lang }: Props) {

  return (
    <section
      className="
        p-3
        flex
        flex-col
        gap-2
        w-full  
        bg-white 
        rounded-t-md
        shadow-lg
      "
    >
      <Items />
      <PageNav 
        lang={lang}
      />
    </section>
  );
};