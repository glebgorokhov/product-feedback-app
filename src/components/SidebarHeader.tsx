import GradientBackground from "@/components/GradientBackground";

const style = {
  wrapper: "px-6 pb-6 pt-16 text-white rounded relative overflow-hidden",
  title: "text-xl font-bold leading-normal relative",
  subtitle: "text-mdsm text-white text-opacity-75 leading-normal relative",
  background: "absolute left-0 top-0 w-full h-full",
};

export default function SidebarHeader() {
  return (
    <div className={style.wrapper}>
      <GradientBackground className={style.background} />
      <h1 className={style.title}>Frontend Mentor</h1>
      <p className={style.subtitle}>Feedback Board</p>
    </div>
  );
}
