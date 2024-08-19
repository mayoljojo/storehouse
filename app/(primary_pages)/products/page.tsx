import { DataTable } from "./data-table";
import { columns, Product } from "./columns";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  const data = res.json();
  return data;
}

async function ProductsPage() {
  const data = await getData();
  return (
    // <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[780px_1fr]">
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid w-full" style={{ minHeight: "calc(100vh - 10vh)" }}>
        <div className="flex flex-col">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
