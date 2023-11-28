import { getCategories } from "@/lib/actions";
import { CategoryType, LangType, SearchParamsType } from "@/lib/types";
import CategoryLink from "@/app/ui/CategoryLink";
import clsx from "clsx";

type Props = {
  lang: LangType;
  searchParams: SearchParamsType;
}

export default async function CategoryContainer({ lang }: Props) {
  const className = "p-3 pb-1 min-w-[300px] max-w-[400px] z-10  bg-saffron  text-amazon rounded-t-md flex flex-col items-center shadow-lg";
  const categories: CategoryType[] | null = await getCategories(lang);

  const containerHeader = {
    am: 'Կատեգորիաներ',
    ru: 'Категории'
  };

  const notLoaded = {
    am: 'Կատեգորիաները չեն բեռնվել',
    ru: 'Категории не были загружены'
  };
  
  if (categories === null) {
    return (
      <section className={className}>
        <h3
          className={clsx('font-semibold', lang === 'am' ? "text-2xl" : 'text-3xl')}
        >
          {containerHeader[lang]}
        </h3>
        <p className="text-red-500 mt-5 text-xl text-center font-milne">Error 500</p>
        <p className="text-red-500 mt-5 text-lg text-center">{notLoaded[lang]}</p>
      </section>
    );
  }
  
  return (
    <section className={className}>
      <h3 
        className={clsx('font-semibold', lang === 'am' ? "text-2xl" : 'text-3xl')}
      >
        {containerHeader[lang]}
      </h3>
      <div className="overflow-auto space-y-2 mt-5 p-4 pb-0">
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