import { CarType } from "../utils/types";
import Card from "./Card";
type ReturnType = Promise<{
  message: string;
  data: CarType[];
}>;

const getCars = async (): ReturnType => {
  const res = await fetch("http://localhost:3000/api/vehicles");
  if (!res.ok) {
    throw new Error("Araçları alırken bir hata oluştu");
  }
  return res.json();
};

const List = async () => {
  const res = await getCars();
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold">
        Bütün Araçları Keşfedin
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {res.data.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default List;
