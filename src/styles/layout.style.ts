import { tw } from "@/utils/tw";

const layout = tw(["flex items-start w-[70rem] mx-auto"]);
const layoutSidebar = tw(["w-[16rem] shrink-0 mr-8"]);
const layoutMain = tw(["flex-1"]);

export default {
  layout,
  layoutSidebar,
  layoutMain,
};
