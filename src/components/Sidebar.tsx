import classNames from "classnames";
import SidebarHeader from "@/components/SidebarHeader";
import SidebarFilters from "@/components/SidebarFilters";
import SidebarRoadmap from "@/components/SidebarRoadmap";

type Props = {
  className?: string;
};

const style = {
  wrapper: "flex flex-col gap-6",
};

export default function Sidebar({ className }: Props) {
  return (
    <div className={classNames([style.wrapper, className])}>
      <SidebarHeader />
      <SidebarFilters />
      <SidebarRoadmap />
    </div>
  );
}
