import CategoryContainer from "@/app/ui/CategoryContainer";
import ContentContainer from "@/app/ui/ContentContainer";
import { ParamsType, SearchParamsType } from "@/lib/types";

type Props = {
  params: ParamsType;
  searchParams: SearchParamsType;
}

export default function Home({ params, searchParams }: Props) {
  
  return (
    <main className="page">
      <CategoryContainer 
        lang={params.lang}
        searchParams={searchParams}
      />
      <ContentContainer 
        lang={params.lang}
      />
    </main>
  );
}
