/* eslint-disable array-callback-return */
import { useState } from "react";

import { Post } from "../../components";
import { useBlog } from "../../contexts/Blog";
import { CreatePost } from "../../components/CreatePost";

export default function Feed() {
  const [mult, setMult] = useState(1);
  const [needMoreBtn, setNeedMoreBtn] = useState(false);
  const posts = useBlog();

  return (
    <section className="relative flex flex-col items-center p-5 pt-20">
      <CreatePost />
      <div className="flex max-w-4xl flex-auto flex-col flex-col-reverse gap-6 md:gap-12">
        {posts.reverse().map((post, count, array) => {
          if (count > array.length - mult * 5) {
            return <Post key={post.id} post={post} />;
          }

          return "";
        })}
      </div>
      <button
        type="button"
        onClick={() => {
          if (posts.length > mult * 5) {
            setMult((old) => old + 1);
          }
        }}
        className="my-4 mt-8 w-1/3 rounded-3xl bg-gradient-to-b from-gradient-default-light to-gradient-default-dark p-2  text-2xl italic text-white opacity-75 shadow-sm transition-opacity duration-1000 hover:opacity-100 active:animate-ping active:opacity-10"
      >
        Carregar Mais
      </button>
    </section>
  );
}
