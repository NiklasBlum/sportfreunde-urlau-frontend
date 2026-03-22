import React from "react";

export interface Column<T> {
  header: string;
  render: (item: T) => React.ReactNode;
}

interface Props<T> {
  items: T[];
  columns: Column<T>[];
  getId: (item: T) => string;
  // optional: custom row class resolver (item, index) => className
  rowClassName?: (item: T, index: number) => string | undefined;
}

export default function ScheduleTable<T>({
  items,
  columns,
  getId,
  rowClassName,
}: Props<T>) {
  return (
    <table className="w-full text-body-xs">
      <thead>
        <tr className="bg-red text-white">
          {columns.map((col, i) => (
            <th key={i} className="text-left px-4 py-3 font-semibold">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          const id = getId(item);
          const defaultRowClass = i % 2 === 0 ? "bg-white" : "bg-background";
          const extra = rowClassName ? rowClassName(item, i) : undefined;

          return (
            <tr
              key={id}
              className={`border-t border-black/6 ${extra ?? defaultRowClass}`}
            >
              {columns.map((col, j) => (
                <td key={j} className="px-4 py-3 text-muted">
                  {col.render(item)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
