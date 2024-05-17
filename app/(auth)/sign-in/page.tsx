import { signIn } from "@/lib/auth";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package2 } from "lucide-react";
import React, { SVGProps } from "react";

export default function SignIn() {
  return (
    <div className="flex min-h-screen w-full flex-col mt-20">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <div className="flex justify-center mb-6">
          <Link href="#">
            <Package2 className="h-8 w-8" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Sign in with your Google account</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline" type="submit">
              <ChromeIcon className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

function ChromeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
