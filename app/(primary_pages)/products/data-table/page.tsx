import { Product, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  const res = await fetch("http://localhost:3000/api/products");
  const data = res.json();
  return data;

  //   return [
  //     {
  //       id: "122113",
  //       name: "Product_nameAAA",
  //       description: "pending",
  //       price: 999,
  //       stock: 99,
  //       categoryId: 2,
  //       tags: "tag_name",
  //     },
  //     {
  //       id: "123133",
  //       name: "Product_name",
  //       description: "pending",
  //       price: 999,
  //       stock: 99,
  //       categoryId: 2,
  //       tags: "tag_name",
  //     },
  //   ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
