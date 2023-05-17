import Link from "next/link";

export interface IDropMenuItemProps {
  children: React.ReactNode,
  href: string,
}

export default function DropMenuItem({children, href}: IDropMenuItemProps) {
  return (
    <li>
    <Link href={href}>
      {children}
    </Link>
    </li>
  );
}