export interface FeedbackCardData {
  id: string;
  title: string;
  description: string;
  commentsCount: number;
  rating: number;
  category: {
    id: string;
    name: string;
  };
}

type Props = {
  data: FeedbackCardData;
};

const style = {
  card: "bg-white rounded px-8 py-7 flex not-first:mt-5 gap-10",
  content: "relative flex-1",
  button:
    "relative px-2 pb-2 pt-3 rounded bg-neutral-100 self-start shrink-0 text-smxs leading-normal font-bold text-neutral-500",
  title: "text-lg text-neutral-500 font-bold leading-normal",
  description: "text-neutral-400 mt-1",
  categories: "mt-3 flex items-center flex-wrap",
  category:
    "py-1.5 px-4 rounded text-smxs font-semibold bg-neutral-100 text-blue-600",
  count: "shrink-0 font-bold text-neutral-500",
};

export default function FeedbackCard({ data }: Props) {
  const { id, title, description, commentsCount, rating, category } = data;

  return (
    <div key={id} className={style.card}>
      <button type="button" className={style.button}>
        {rating}
      </button>
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.categories}>
          <div className={style.category}>{category.name}</div>
        </div>
      </div>
      <div className={style.count}>{commentsCount}</div>
    </div>
  );
}
