import { LangType } from "@/lib/types";
import Button from "./Button";

type Props = {
  lang: LangType;
}

export default function PageNav({ lang }: Props) {

  return (
    <section
      className="w-full flex items-center justify-center gap-4"
    >
      <Button 
        direction="prev"
        lang={lang}
      />
      <Button 
        direction="next"
        lang={lang}
      />
    </section>
  );
};