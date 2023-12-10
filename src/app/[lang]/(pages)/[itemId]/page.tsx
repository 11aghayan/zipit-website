'use client';

import ContentContainer from "@/app/ui/ContentContainer";
import ImageModal from "@/app/ui/ImageModal";
import { LangType } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

type Props = {
  itemId: string;
  lang: LangType;
}

export default function Page({ lang, itemId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

  // TODO: get item from server
  
  
  return (
    <main className="page">
      <ImageModal 
        imageSrc={imageSrc}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <ContentContainer>
        <section>
          <Image 
            src={imageSrc}
            alt=""
            width={300}
            height={300}
            className="rounded-md shadow-sm cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </section>
      </ContentContainer>
    </main>
  );
};