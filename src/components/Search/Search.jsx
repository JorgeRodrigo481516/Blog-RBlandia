/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { useBlog, useBlogUpdate } from "../../contexts/Blog";

import {
  getDifferenceIsSave,
  getDifferenceObj,
} from "../../utils/getDifference";

export default function Search() {
  const posts = useBlog();
  const updatePosts = useBlogUpdate();

  const [allPosts, setAllPosts] = useState(posts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const differenceObj = getDifferenceObj(allPosts, posts);

    const newAllPosts = [...differenceObj, ...posts];

    setAllPosts(newAllPosts);
  }, [posts]);

  useEffect(() => {
    if (search === "") {
      document.getElementById("results").style.display = "none";
      document.getElementById("create").style.display = "block";

      updatePosts(false, false, false, allPosts, true);

      const differenceIsSave = [
        ...getDifferenceIsSave(allPosts, posts),
        ...getDifferenceIsSave(posts, allPosts),
      ];

      differenceIsSave.forEach((object) => {
        updatePosts(object.id, "isSave", object.isSave);
      });
    } else {
      document.getElementById("create").style.display = "none";
      document.getElementById("results").style.display = "block";

      const filteredPosts = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase())
      );

      updatePosts(false, false, false, filteredPosts, true);
    }
  }, [search]);

  return (
    <>
      <label className="flex max-h-10 cursor-pointer items-center gap-3 rounded-md bg-white bg-opacity-20 p-3 shadow-sm focus-within:bg-opacity-30 sm:max-h-16 sm:gap-5 sm:p-6">
        <img
          src={searchIcon}
          alt="Search icon"
          className="h-4 w-4 sm:h-6 sm:w-6"
        />
        <input
          type="text"
          placeholder="Pesquisar no blog"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[transparent] text-[clamp(17px,4vw,22px)] text-gray text-gray-dark outline-none placeholder:text-white placeholder:text-opacity-50"
        />
      </label>
      <span
        id="results"
        className="absolute top-56 text-[clamp(32px,5vw,38px)] italic tracking-wider md:top-72"
      >
        Resultados:
      </span>
    </>
  );
}
