import { type FeedbackCardData } from "@/components/FeedbackCard";

const mockFeedbackCards: FeedbackCardData[] = [
  {
    id: "1",
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    commentsCount: 2,
    rating: 112,
    category: {
      id: "c1",
      name: "Enhancement",
    },
  },
  {
    id: "2",
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    commentsCount: 2,
    rating: 112,
    category: {
      id: "c1",
      name: "Enhancement",
    },
  },
];

export default mockFeedbackCards;
