interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * Renders a section element with a customizable `id` and `className`.
 * Wraps its children in a centered container with responsive padding and maximum width.
 */
export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-15 lg:py-20">
        {children}
      </div>
    </section>
  );
}
