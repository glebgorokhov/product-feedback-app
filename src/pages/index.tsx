import { type NextPage } from "next";
import { api } from "@/utils/api";
import AuthShowcase from "@/components/AuthShowcase";
import mockFeedbackCards from "@/mocks/feedback-cards";
import FeedbackCard from "@/components/FeedbackCard";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  console.log(hello);

  return (
    <>
      <main>
        <p>Main</p>
        <div>
          {mockFeedbackCards.map((data) => (
            <FeedbackCard key={data.id} data={data} />
          ))}
        </div>
        <AuthShowcase />
      </main>
    </>
  );
};

export default Home;
