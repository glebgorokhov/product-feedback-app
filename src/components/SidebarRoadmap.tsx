import Link from "next/link";
import classNames from "classnames";

const style = {
  wrapper: "px-6 pt-5 pb-6 bg-white rounded",
  header: "flex items-center justify-between",
  title: "text-lg text-neutral-500 font-bold leading-normal",
  link: "text-smxs text-blue-600 font-semibold text-opacity-25 transition-colors underline hover:text-opacity-100",
  items: "mt-6 text-neutral-400",
  item: "not-first:mt-2 flex items-center gap-4 text-base leading-normal",
  itemCircle: "w-2 h-2 rounded-full shrink-0",
  itemName: "flex-1",
  itemCount: "font-bold shrink-0",
};

export default function SidebarRoadmap() {
  const items = [
    {
      name: "Planned",
      count: 0,
      color: "bg-orange-200",
    },
    {
      name: "In-Progress",
      count: 3,
      color: "bg-purple-600",
    },
    {
      name: "Live",
      count: 1,
      color: "bg-sky-400",
    },
  ];

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h3 className={style.title}>Roadmap</h3>
          <Link href="/roadmap" className={style.link}>
            View
          </Link>
        </div>

        <ul className={style.items}>
          {items.map((item) => (
            <li key={item.name} className={style.item}>
              <div className={classNames([style.itemCircle, item.color])} />
              <p className={style.itemName}>{item.name}</p>
              <span className={style.itemCount}>{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
