"use client";
import { toast } from "@/components/ui/use-toast";
import { FormSchema } from "@/zod-schema/schema";
import { z } from "zod";
import FormProduct from "@/components/form/FormProduct";

const Page: React.FC = () => {
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 10vh)" }}
      >
        <FormProduct onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default Page;
