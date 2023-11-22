import axios from '@/lib/axios';
import { LangType } from '@/lib/types';

export async function getCategories(lang: LangType) {
  const data = await axios(`/categories/${lang}`);

  if (data.status !== 200) {
    return null;
  }  
  return data.data;
}