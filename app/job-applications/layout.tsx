import Header from "@/app/ui/job-application-table/header";
import Footer from "../ui/job-application-table/footer";
import ToasterContext from "../context/ToasterContext";
import AuthContext from "../context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext>
      <div id="main-content" className="flex flex-col p-6 bg-gray-100">
        <div className="w-full">
          <Header />
        </div>
        <div>
          <ToasterContext />
          {children}
        </div>
        <Footer />
      </div>
    </AuthContext>
  );
}
