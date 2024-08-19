import { getCategories } from "@/actions/get-categories";
import { ProductFormSchema } from "@/zod-schema/schema";
import { z } from "zod";
import AddProductForm from "@/components/form/AddProductForm";

type ProductFormData = z.infer<typeof ProductFormSchema>;

const Page: React.FC = async () => {
  const [categories] = await Promise.all([getCategories()]);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 10vh)" }}
      >
        <AddProductForm categories={categories} />

        {/* This is for the edit page:: <FormProduct onSubmit={handleSubmit} defaultValues={blogData} isEdit /> */}
      </div>
    </main>
  );
};

export default Page;
