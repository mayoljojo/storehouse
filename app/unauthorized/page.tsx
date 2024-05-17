import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban } from "lucide-react";

function page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            <CardTitle>Access Denied</CardTitle>
            <Ban className="ml-2 h-5 w-5 text-red-500" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          You do not have permission to access this content. Please contact an
          administrator if you believe this is an error.
        </p>
      </CardContent>
    </Card>
  );
}

export default page;
