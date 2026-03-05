interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * A flexible section component that wraps content with responsive padding.
 */
export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={className}>
      {/* //TODO: Add a container which supports ultrawide */}
      <div className="px-8 py-10 lg:py-20 lg:px-50">{children}</div>
    </section>
  );
}
