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

export type ItemType = {
  id: string;
  category: ItemCategoryType;
  name: string;
  price: number;
  promo: PromoType;
  size: SizeType;
  minOrder: MinOrderType;
  photos: PhotoType[];
  description: string;
};

export type ItemPreviewType = {
  id: string;
  category: ItemCategoryType;
  name: string;
  price: number;
  promo: PromoType;
  size: SizeType;
  photo: PhotoType;
}

export type ItemCategoryType = {
  id: string;
  name: string;
}

export type PromoType = number | null;

export type SizeType = {
  val: number;
  unit: SizeUnitType;
};

export type SizeUnitType = 'mm' | 'cm' | 'm';

export type MinOrderType = {
  qty: number;
  unit: MinOrderUnitType;
};

export type MinOrderUnitType = 'pcs' | 'cm' | 'box' | 'roll';

export type PhotoType = {
  src: string;
  qty: number;
  color: string;
};