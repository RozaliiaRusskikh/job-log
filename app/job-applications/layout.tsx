import Header from "@/app/ui/job-application-table/header";
import Footer from "../ui/job-application-table/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="main-content" className="flex flex-col p-6 bg-gray-100">
      <div className="w-full">
        <Header />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
