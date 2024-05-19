import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storehouse",
  description: "NextJS web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <body className={inter.className}>{children}</body>
        {/* </ThemeProvider> */}
      </TooltipProvider>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import LeftPanel from "@/components/left-panel";
// import { TopNav } from "@/components/nav-top";
// import { ThemeProvider } from "@/components/providers/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Storehouse",
//   description: "NextJS web app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <TooltipProvider>
//         {/* <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         > */}
//         <body className={inter.className}>
//           <div className="flex min-h-screen w-full flex-col bg-muted/40">
//             <LeftPanel />
//             <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
//               <TopNav />
//               <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
//                 {children}
//               </main>
//             </div>
//           </div>
//         </body>
//         {/* </ThemeProvider> */}
//       </TooltipProvider>
//     </html>
//   );
// }
