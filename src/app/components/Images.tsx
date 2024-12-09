import Image from "next/image";
import Car1 from "@/app/assets/images/car1.png";
import Car2 from "@/app/assets/images/car2.png";
import Car3 from "@/app/assets/images/car3.png";
import Car4 from "@/app/assets/images/car4.png";

type Props = {
  url: string;
};

const Images = ({ url }: Props) => {
  const arr = [Car1, Car2, Car3, Car4];
  return (
    <div>
      <div className="relative max-md:h-[300px]">
        <Image
          alt="vehicle"
          src={url}
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {arr.map((src, key) => (
          <Image alt="car" key={key} src={src} className="rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default Images;
