import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

interface EmailLinkProps {
  email: string;
}

export function EmailLink({ email }: EmailLinkProps) {
  return (
    <Link
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 text-red font-semibold text-body hover:underline"
    >
      {email}
    </Link>
  );
}
