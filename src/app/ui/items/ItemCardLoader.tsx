export default function ItemCardLoader() {

  return (
    <article 
      className="
        relative
        bg-gray-200
        rounded-lg 
        w-[315px]
        h-44
        shadow-sm
        p-2
        space-y-2
        overflow-hidden
        before:absolute 
        before:inset-0
        before:-translate-y-full
        before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-b
        before:from-transparent 
        before:via-white 
        before:to-transparent
      "
    >
      {/* Top */}
      <section className="flex w-full gap-2">
        {/* left */}
          <div className="w-full h-32 rounded-xl bg-gray-300" />

        {/* right */}
        <section className="w-full space-y-2">
          <div className="w-full h-5 rounded-full bg-gray-300" />
          <div className="w-full h-5 rounded-full bg-gray-300" />
          <div className="w-full h-5 rounded-full bg-gray-300" />
        </section>

      </section>
      <section>
        <div className="w-full h-5 rounded-full bg-gray-300" />
      </section>
    </article>
  );
};