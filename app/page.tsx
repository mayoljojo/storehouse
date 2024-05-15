import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <div>Dashboard</div>
      <div>User: {user?.name}</div>
    </div>
  );
}
