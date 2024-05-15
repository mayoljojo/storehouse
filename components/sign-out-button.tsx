import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignOutBtn() {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Logout
    </Button>
  );
}
