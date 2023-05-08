import { useState } from "react";
import classNames from "classnames";

type Filter = {
  id: string;
  label: string;
};

const style = {
  wrapper: "p-6 flex items-center flex-wrap gap-2 bg-white rounded",
  filter: ({ isActive = false }) =>
    classNames([
      "px-4 py-1.5 rounded text-smxs font-semibold transition-colors",
      {
        "bg-neutral-100 text-blue-600 hover:bg-neutral-150": !isActive,
        "bg-blue-600 text-white": isActive,
      },
    ]),
};

export default function SidebarFilters() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "ui",
      label: "UI",
    },
  ]);

  const allFilter: Filter = {
    id: "all",
    label: "All",
  };

  const allFilters = [allFilter, ...filters];

  return (
    <div className={style.wrapper}>
      {allFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={style.filter({
            isActive: activeFilter === filter.id,
          })}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
