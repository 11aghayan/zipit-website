import Image from "next/image";

type Props = {
  imageSrc: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ImageModal({ imageSrc, isOpen, setIsOpen }: Props) {
  
  return (
    isOpen?
    <div
      className="fixed inset-0 z-20 bg-black/40 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <Image 
        src={imageSrc}
        alt=""
        height={500}
        width={500}
        onClick={e => e.stopPropagation()}
      />
    </div>
    :null
  );
};