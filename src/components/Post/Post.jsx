/* eslint-disable react/prop-types */
import plusIcon from "../../assets/plus.png";
import heart from "../../assets/heart.svg";
import heartFill from "../../assets/heart-fill.svg";
import { useBlogUpdate } from "../../contexts/Blog";

export default function Post({ post }) {
  const updatePost = useBlogUpdate();

  return (
    <article className="rounded-md bg-white p-5 shadow-lg w-[90vw] max-w-4xl">
      <div className="flex justify-between">
        <span className="text-[clamp(14px,5vw,16px)] text-gray">
          {post.date}
        </span>
        <button
          type="button"
          className="h-5  w-6 cursor-pointer transition-all duration-150 hover:scale-125"
          onClick={() => {
            updatePost(post.id, "isSave", !post.isSave);
          }}
        >
          <img
            src={post.isSave ? heartFill : heart}
            alt="Heart icon"
            className="hover:drop-shadow-lg"
          />
        </button>
      </div>
      <h2 className="my-2 mt-6 text-[clamp(18px,5vw,26px)] text-gray-dark">
        {post.title}
      </h2>
      <p className="text-[clamp(14px,5vw,18px)] leading-7 text-gray md:leading-8">
        {post.description}
      </p>
    </article>
  );
}
