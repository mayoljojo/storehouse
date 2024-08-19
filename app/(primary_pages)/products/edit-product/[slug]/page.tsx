import { getCategories } from "@/actions/get-categories";
import { getProductBySlug } from "@/actions/get-product-by-slug";
import EditProductForm from "@/components/form/EditProductForm";

const EditProductPage = async ({ params }: { params: { slug: number } }) => {
  const [categories, product] = await Promise.all([
    getCategories(),
    getProductBySlug(Number(params.slug)),
  ]);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 10vh)" }}
      >
        <EditProductForm
          productId={params.slug}
          categories={categories}
          defaultValues={product}
          isEdit
        />
      </div>
    </main>
  );
};

export default EditProductPage;
