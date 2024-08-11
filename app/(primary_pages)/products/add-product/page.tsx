import FormProduct from "@/components/form/FormProduct";
import { getCategories } from "@/actions/actions";

const Page: React.FC = async () => {
  const [categories] = await Promise.all([getCategories()]);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 10vh)" }}
      >
        <FormProduct categories={categories} />

        {/* This is for the edit page:: <FormProduct onSubmit={handleSubmit} defaultValues={blogData} isEdit /> */}
      </div>
    </main>
  );
};

export default Page;
