import { type NextPage } from "next";
import { api } from "@/utils/api";
import AuthShowcase from "@/components/AuthShowcase";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  console.log(hello);

  return (
    <>
      <main>
        <p>Main</p>
        <AuthShowcase />
      </main>
    </>
  );
};

export default Home;
