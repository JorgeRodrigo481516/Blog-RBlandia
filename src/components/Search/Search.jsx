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

  const fetchPosts = (parameter) => {
    console.log(posts.find((post) => post.isSave === parameter));
  };

  useEffect(() => {
    if (search === "") {
      const differenceObj = [
        ...getDifferenceObj(allPosts, posts),
        ...getDifferenceObj(posts, allPosts),
      ];

      const newAllPosts = [...differenceObj, ...allPosts];

      setAllPosts(newAllPosts);
      updatePosts(false, false, false, newAllPosts, true);

      const differenceIsSave = [
        ...getDifferenceIsSave(allPosts, posts),
        ...getDifferenceIsSave(posts, allPosts),
      ];

      differenceIsSave.forEach((object) => {
        updatePosts(object.id, "isSave", object.isSave);
      });
    } else {
      fetchPosts(true);
      // const requestedPosts = fetchPosts(search)
      // update
    }
  }, [search]);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
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
  );
}
