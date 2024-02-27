import Link from "next/link";

interface NavLinkProps {
  title: string;
  path: string;
  pathname?: string;
}

export default function NavLink({ title, path, pathname }: NavLinkProps) {
  const activeStyles =
    "border-b-4 border-emerald-500 transition-all hover:text-emerald-200 hover:border-none pb-2.5 font-bold";

  const inactiveStyles = "hover:text-emerald-200 transition-all font-bold";

  const styles = path === pathname ? activeStyles : inactiveStyles;
  return (
    <div>
      <Link href={path} className={styles}>
        {title}
      </Link>
    </div>
  );
}
