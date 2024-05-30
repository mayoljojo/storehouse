import { FormTest } from "@/components/form/FormTest";

function page() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 10vh)" }}
      >
        <FormTest />
        {/* <Card className="shadow-sm rounded-md w-full max-w-2xl p-8">
          <CardHeader className="text-3xl font-bold mb-6">
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter product name"
                    type="text"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Product Category</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="beauty">Beauty</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="price">Product Price</Label>
                  <Input
                    id="price"
                    placeholder="Enter product price"
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="tags">Product Tags</Label>
                  <Input
                    id="tags"
                    placeholder="Enter tags (separated by commas)"
                    type="text"
                  />
                </div>
                <div>
                  <Label htmlFor="stock">Product Stock</Label>
                  <Input
                    id="stock"
                    placeholder="Enter product stock"
                    type="number"
                  />
                </div>
              </div>
            </form>
            <div className="mt-8 flex justify-end gap-4">
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button
                className="bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                size="lg"
              >
                Save Product
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </main>
  );
}

export default page;
