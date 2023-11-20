import Slogan from "@/app/ui/Slogan";
import Logo from "@/app/ui/Logo";
import { ParamsType } from "@/types";
import Navbar from "./Navbar";

type Props = {
  params: ParamsType;
}

export default function Header({ params }: Props) {
  return (
    <header className="bg-oxford py-4 pb-36">
      <section className="flex justify-between items-center">
        <Logo 
          params={params}
        />
        <Navbar 
          params={params}
        />
      </section>
      <Slogan />
    </header>
  );
}