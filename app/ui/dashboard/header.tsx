import JobLogsLogo from "../job-logs-logo";
import NavLink from "./navLink";

interface HeaderProps {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const navMenu = [
    { title: "Active", path: "/dashboard" },
    { title: "Rejected", path: "/dashboard/rejected-job-applications" },
  ];

  return (
    <div className="flex flex-col h-32 shrink-0 items-start justify-between rounded-lg bg-primary p-4 md:h-44">
      <JobLogsLogo className="pl-1" />
      <nav className="pl-2">
        <ul className="flex justify-start gap-14 items-center text-white">
          {navMenu.map((navLink, i) => (
            <NavLink
              key={i}
              title={navLink.title}
              path={navLink.path}
              pathname={pathname}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
