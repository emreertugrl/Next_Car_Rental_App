import { CarType } from "../utils/types";
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
      <div>
        {res.data.map((car) => (
          <div key={car._id} className="flex gap-4">
            <h1>{car.make}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
