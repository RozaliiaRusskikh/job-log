import JobLogsLogo from "../job-logs-logo";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="flex flex-col h-32 shrink-0 items-start justify-between rounded-lg bg-primary p-4 md:h-44">
      <JobLogsLogo className="pl-1" />
      <Menu />
    </div>
  );
};

export default Header;
