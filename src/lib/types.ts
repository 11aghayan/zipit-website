export type LangType = 'am' | 'ru';

export type ParamsType = {
  lang: LangType;
}

export type SearchParamsType = {
  [param: string]: string;
}

export type CategoryType = {
  label: string;
  id: string;
  itemsQty: number;
}