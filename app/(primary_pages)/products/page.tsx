import ProductList from "@/components/ProductList";

function ProductsPage() {
  return (
    // <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[780px_1fr]">
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid w-full" style={{ minHeight: "calc(100vh - 10vh)" }}>
        <div className="flex flex-col">
          {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Link
                className={cn(buttonVariants(), "mt-4")}
                href="/products/add-product"
              >
                Add Product
              </Link>
            </div>
          </div>
        </main> */}
          <ProductList />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
