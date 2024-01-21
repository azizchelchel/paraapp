interface Props {
  href: string;
  children: React.ReactNode;
}

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();
  console.log(router);
  const isActive: boolean = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);
  return (
    <Link
      href={href}
      className={clsx(
        isActive && "text-primary underline underline-offset-1 font-medium"
      )}
    >
      {children}
    </Link>
  );
};
