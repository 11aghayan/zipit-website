type Props = {
  height: string;
}

export default function Slogan() {
  return (
    <div 
      className="flex items-center justify-center font-milne text-customOrange bg-oxford"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-8xl tracking-widest">
          ZIPIT EAZY
          </h2>
        <h2 className="font-extrabold self-end text-5xl tracking-wider">
          ZIPIT
          <span className="font-medium text-3xl tracking-normal">
            accessories
          </span>
        </h2>
      </div>
    </div>
  );
}