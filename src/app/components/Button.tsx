"use client";

import { useState } from "react";
import { CarType } from "../utils/types";
import Loader from "./Loader";

type Props = {
  car: CarType;
};

const Button = ({ car }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    // ödeme oturumu için istek atılır.
    fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      body: JSON.stringify(car),
    })
      // 2- gelen veriyi işle
      .then((res) => res.json())
      .then((data) => (window.location.href = data.url))
      .finally(() => setIsLoading(false));
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-blue-600"
    >
      {isLoading ? <Loader /> : <span>Kirala</span>}
    </button>
  );
};

export default Button;
