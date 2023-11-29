import CategoryContainer from "@/app/ui/CategoryContainer";
import ContentContainer from "@/app/ui/ContentContainer";
import Items from "@/app/ui/items/Items";
import PageNav from "@/app/ui/pageNav/PageNav";
import { ParamsType, SearchParamsType } from "@/lib/types";

type Props = {
  params: ParamsType;
  searchParams: SearchParamsType;
}

export default function Home({ params, searchParams }: Props) {
  const lang = params.lang;
  
  return (
    <main className="page">
      <CategoryContainer 
        lang={lang}
        searchParams={searchParams}
      />
      <ContentContainer>
        <div
          className="
            flex
            flex-col
            gap-2
            justify-between
            h-full
          "
        >
          <div>
            <Items 
              lang={lang}
            />
          </div>
          <div className="">
            <PageNav 
              lang={lang}
            />
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}
