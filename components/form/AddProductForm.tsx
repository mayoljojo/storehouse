"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductFormSchema } from "@/zod-schema/schema";
import Link from "next/link";
import { addNewProduct } from "@/actions/add-new-product";
import { toast } from "@/components/ui/use-toast";

// Define TypeScript type from Zod schema
type ProductFormData = z.infer<typeof ProductFormSchema>;

interface ProductFormProps {
  defaultValues?: ProductFormData;
  // onSubmit: (data: ProductFormData) => void;
  isEdit?: boolean;
  categories: {
    name: string;
    id: number;
  }[];
}

const onSubmit = async (data: ProductFormData) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price.toString());
  formData.append("stock", data.stock.toString());
  formData.append("category", data.category.toString());

  if (data.tags) {
    formData.append("tags", data.tags);
  }

  const savedProduct = await addNewProduct(formData);

  if (!savedProduct) {
    toast({
      title: "Product is successfully added.",
    });
  } else if (savedProduct.error) {
    toast({
      variant: "destructive",
      title:
        "Uh oh! Something went wrong. There was a problem with your request",
      description: savedProduct.error,
    });
  }
};

const AddProductForm: React.FC<ProductFormProps> = ({
  defaultValues,
  // onSubmit,
  isEdit = false,
  categories,
}) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      tags: "",
      stock: 0,
    },
  });

  return (
    <Card className="shadow-sm rounded-md w-full max-w-3xl p-8">
      <CardHeader className="text-3xl font-bold mb-6">
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            // action={addNewProduct}
            onSubmit={form.handleSubmit(onSubmit)}
            // className="w-2/3 space-y-6"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name-input"
                        placeholder="Enter product name..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product description..."
                        id="description_input"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Category</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        const categoryInput = document.getElementById(
                          "category_hidden_input"
                        ) as HTMLInputElement | null;
                        if (categoryInput) {
                          categoryInput.value = value;
                        }
                      }}
                      // defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id.toString()}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      id="category_hidden_input"
                      name="category"
                      defaultValue={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Price</FormLabel>
                    <FormControl>
                      <Input
                        id="price_input"
                        placeholder="Enter product price..."
                        {...field}
                        type="number"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Tags</FormLabel>
                    <FormControl>
                      <Input
                        id="tags-input"
                        placeholder="Enter product tags (comma separated)..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Stock</FormLabel>
                    <FormControl>
                      <Input
                        id="stock_input"
                        placeholder="Enter product stock..."
                        type="number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 mt-8 flex justify-end gap-4">
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button size="lg" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddProductForm;
