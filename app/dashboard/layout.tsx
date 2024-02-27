import Header from "@/app/ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <div className="w-full">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
