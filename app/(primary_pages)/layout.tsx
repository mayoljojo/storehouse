import LeftPanel from "@/components/left-panel";
import { TopNav } from "@/components/nav-top";

export default function PrimaryPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftPanel />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <TopNav />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
