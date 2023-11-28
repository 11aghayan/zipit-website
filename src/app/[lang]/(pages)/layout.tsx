import BgImage from "@/app/ui/BgImage";

type Props = {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  
  return (
    <main>
      {children}
      <BgImage />
    </main>
  );
};