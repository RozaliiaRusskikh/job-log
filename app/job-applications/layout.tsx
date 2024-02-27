import Header from "@/app/ui/job-application-table/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="main-content" className="flex flex-col p-6 bg-gray-100">
      <div className="w-full">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
