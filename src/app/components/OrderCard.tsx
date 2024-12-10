import Image from "next/image";
import { OrderType } from "../utils/types";
import millify from "millify";

type Props = {
  order: OrderType;
};
const OrderCard = ({ order }: Props) => {
  return (
    <div className="border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 xl:grid-cols-5 hover:bg-zinc-100/10 transition cursor-pointer">
      <Image
        width={200}
        height={200}
        src={order.product.imageUrl}
        unoptimized
        alt="car"
      />
      <Info title={order.product.make} value={order.product.model} />

      <Info
        title={"Ödenen Tutar"}
        value={millify(order.money_spend) + " ₺"}
        design="text-green-600"
      />

      <Info
        title={"Alım Tarihi"}
        value={new Date(order.createdAt).toLocaleDateString()}
        design="text-blue-600"
      />

      <Info
        title={"Ödeme Tipi"}
        value={order.type.replace("_", " ")}
        design="text-blue-600"
      />
    </div>
  );
};

import React from "react";
type InfoProps = {
  title: string;
  value: string;
  design?: string;
};
const Info = ({ title, value, design }: InfoProps) => {
  return (
    <p className="flex max-md:flex-col gap-1">
      <span className="whitespace-nowrap">{title}</span>
      <span className={`font-bold ${design} capitalize mx-1 whitespace-nowrap`}>
        {value}
      </span>
    </p>
  );
};

export default OrderCard;
