type Props = {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: Props) {

  return (
    <section
      className="
        p-3
        w-full  
        bg-white 
        rounded-t-md
        shadow-lg
        overflow-auto
      "
    >
      {children}
    </section>
  );
};