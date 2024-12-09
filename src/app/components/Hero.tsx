import Image from "next/image";
import { models } from "@/app/utils/contants";
const Hero = () => {
  return (
    <div className="h-[80vh] l-gradient grid place-items-center p-5  bg-center bg-cover text-white bg-[#00000084]">
      <div className="text-center flex flex-col gap-8 mt-10">
        <p>Yakınındaki kiralık araçları keşfet</p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Kendin için Mükemmel Aracı Bul
        </h1>
        <p>Kendine uygun modeli belirle</p>
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        {models.map((model, key) => (
          <button
            key={key}
            className="px-3 py-1 rounded-full bg-gray-100/25 transition hover:bg-gray-500/25 flex gap-3 items-center"
          >
            <Image src={model.icon} alt={model.name} />
            {model.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
