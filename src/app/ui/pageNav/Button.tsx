import { LangType } from "@/lib/types";

type Props = {
  direction: 'prev' | 'next';
  lang: LangType
}

export default function Button({ direction, lang }: Props) {

  const directionLang = {
    next: {
      am: 'Հաջորդ էջ',
      ru: 'След. стр.'
    }, 
    prev: {
      am: 'Նախորդ էջ',
      ru: 'Пред. стр.'
    }
  };
  
  return (
    <button
      className="
        p-2 rounded-lg 
        bg-amazon 
        text-white
        hover:opacity-80
        disabled:bg-gray-300
        disabled:opacity-100
      "
    >
      {directionLang[direction][lang]}
    </button>
  );
};