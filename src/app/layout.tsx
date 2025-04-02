import { SessionProvider } from "@/components/SessionProvider";
import UserButton from "@/components/UserButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <header className="flex justify-between p-4 bg-gray-900 text-white">
            <div className="text-xl font-bold">MyApp</div>
            <UserButton />
          </header>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
