import Image, { StaticImageData } from "next/image";
import { CarType } from "@/app/utils/types";
import Link from "next/link";
import arrow from "@/app/assets/icons/arrow.svg";
import mile from "@/app/assets/icons/mile.svg";
import transmission from "@/app/assets/icons/transmission.svg";
import gas from "@/app/assets/icons/gas.svg";
type Props = {
  car: CarType;
};
const Card = ({ car }: Props) => {
  type InfoObject = {
    icon: StaticImageData;
    name: string;
  };

  //
  const arr: InfoObject[] = [
    {
      icon: mile,
      name: car.mileage + " Miles",
    },
    {
      icon: gas,
      name: car.fuelType,
    },
    {
      icon: transmission,
      name: car.transmission,
    },
  ];
  return (
    <div className="border shadow rounded hover:shadow-lg">
      <div className="relative h-[250px]">
        <Image
          alt={car.model}
          src={car.imageUrl}
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <div className="py-5 px-10 sm:px-5">
        <h2 className="text-2xl font-semibold">
          {car.make} {" " + car.model}
        </h2>
        <hr className="border-[#E9E9E9] border-2 my-3" />
        <div className="flex justify-between">
          {arr.map((i, key) => (
            <div className="flex flex-col gap-2 items-center" key={key}>
              <Image alt={i.name} src={i.icon} width={24} height={24} />
              <p className="text-lg sm:text-base">{i.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-[#E9E9E9] border-2 my-3" />
        <div className="flex justify-between text-2xl sm:text-xl">
          <p className="font-semibold">$ {car.price}</p>
          <div className="flex gap-1 items-center text-blue-500 hover:text-blue-800">
            <Link href={`/car/${car._id}`}>Detay</Link>
            <Image alt="arrow" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
