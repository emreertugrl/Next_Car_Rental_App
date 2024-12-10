import { CarType, OrderType } from "./types";

type DetailRes = Promise<{
  metadata: string;
  vehicle: CarType;
}>;
export const getDetail = async (id: string): DetailRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/vehicles/${id}`);

  if (!res.ok) throw new Error("Araç detayları alınırken bir hata oluştu");

  return await res.json();
};

type CarsRes = Promise<{
  message: string;
  data: CarType[];
}>;

export const getCars = async (): CarsRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/vehicles`);
  if (!res.ok) {
    throw new Error("Araçları alırken bir hata oluştu");
  }
  return res.json();
};

type OrderRes = Promise<{
  message: string;
  orders: OrderType[];
}>;

export const getOrders = async (): OrderRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/orders`);
  if (!res.ok) {
    throw new Error("Siparişleri alırken bir hata oluştu");
  }
  return res.json();
};
