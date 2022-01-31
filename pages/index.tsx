import type { NextPage } from "next";
import { Htag, Button, Ptag, Tag, Rating } from "../components";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(3);

  useEffect(() => {
    setCounter(333);
  }, []);
  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Htag tag="h2">Hello Next</Htag>
      <Htag tag="h3">Hello Next</Htag>
      <Button
        appearance="primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        Primary
      </Button>
      <Button
        appearance="ghost"
        arrow="down"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        Ghost
      </Button>
      <Ptag size="s">This is p small</Ptag>
      <Ptag size="m">This is p medium</Ptag>
      <Ptag size="l">This is p large</Ptag>
      <Ptag>This is also p medium</Ptag>
      <Tag color="white">White tag</Tag>
      <Tag color="green">Green tag</Tag>
      <Tag color="purple">Purple tag</Tag>
      <Tag color="purple" url="www.google.com">
        Purple URL
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
    </div>
  );
};

export default Home;
