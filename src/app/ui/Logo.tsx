import Image from "next/image";
import Link from "next/link";

import { ParamsType } from "@/lib/types";
import logo from '@/assets/logomark.svg';

type Props = {
  params: ParamsType;
}

export default function Logo({ params }: Props) {

  return (
    <Link
      href={`/${params.lang}`}
      className="w-20 h-20 block ml-4"
    >
      <Image 
        src={logo}
        alt="logo"
        className="object-fit"
      />
    </Link>
  );
};