import { CarType } from "./types";

type DetailRes = Promise<{
  metadata: string;
  vehicle: CarType;
}>;
export const getDetail = async (id: string): DetailRes => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);

  if (!res.ok) throw new Error("Araç detayları alınırken bir hata oluştu");

  return await res.json();
};

type CarsRes = Promise<{
  message: string;
  data: CarType[];
}>;

export const getCars = async (): CarsRes => {
  const res = await fetch("http://localhost:3000/api/vehicles");
  if (!res.ok) {
    throw new Error("Araçları alırken bir hata oluştu");
  }
  return res.json();
};
