import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";

export const Home = () => {
  return (
    <Layout>
      <Board />
      <RCV />
      <Discover />
    </Layout>
  );
};
