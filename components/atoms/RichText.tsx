import { PortableText, type PortableTextComponents } from "next-sanity";
import { ComponentPropsWithoutRef } from "react";
import { CmsRichText } from "@/lib/cms/types/cmsRichText";
import { Headline } from "./Headline";
import Link from "next/link";

interface RichTextProps extends ComponentPropsWithoutRef<"div"> {
  value: CmsRichText | null | undefined;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <Headline level="h1">{children}</Headline>,
    h2: ({ children }) => <Headline level="h2">{children}</Headline>,
    h3: ({ children }) => <Headline level="h3">{children}</Headline>,
    h4: ({ children }) => <Headline level="h4">{children}</Headline>,
    h5: ({ children }) => <Headline level="h5">{children}</Headline>,
    h6: ({ children }) => <Headline level="h6">{children}</Headline>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-6 italic text-muted my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-accent hover:underline"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className="text-red-accent hover:underline">
          {children}
        </Link>
      );
    },
    underline: ({ children }) => <u className="underline">{children}</u>,
    "strike-through": ({ children }) => (
      <s className="line-through">{children}</s>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside ml-4 mb-8 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside ml-4 mb-8 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

// This component is a simple wrapper around the PortableText component from next-sanity.
export default function RichText({
  value,
  className = "",
  ...props
}: RichTextProps) {
  if (!Array.isArray(value) || value.length === 0) return null;

  return (
    <div className={`text-body ${className}`} {...props}>
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
