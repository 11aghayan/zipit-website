import { getCategories } from "@/lib/actions";
import { CategoryType, LangType, SearchParamsType } from "@/lib/types";
import CategoryLink from "@/app/ui/CategoryLink";

type Props = {
  lang: LangType;
  searchParams: SearchParamsType;
}

export default async function CategoryContainer({ lang, searchParams }: Props) {
  const className = "p-3 min-w-[300px] max-w-[400px] z-10  bg-saffron  text-amazon rounded-t-xl flex flex-col items-center shadow-lg";
  const categories: CategoryType[] | null = await getCategories(lang);


  
  if (categories === null) {
    return (
      <section className={className}>
        <h3>Categories</h3>
        <p>Something went wrong</p>
        <p>Categories not loaded</p>
      </section>
    );
  }
  
  return (
    <section className={className}>
      <h3 className="text-2xl">Categories</h3>
      <div className="overflow-auto space-y-2 mt-5">
        {
          categories.map(category => (
            <CategoryLink 
              key={category.id}
              category={category} 
            />
          ))
        }
      </div>
    </section>
  );
};