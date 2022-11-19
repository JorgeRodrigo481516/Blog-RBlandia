import { createContext, useCallback, useContext, useState } from "react";

import posts from "../database/posts";

const blogContext = createContext();
const blogUpdateContext = createContext();

export function useBlog() {
  return useContext(blogContext);
}
export function useBlogUpdate() {
  return useContext(blogUpdateContext);
}

// eslint-disable-next-line react/prop-types
export function BlogProvider({ children }) {
  const [data, setData] = useState(posts);

  const updatePosts = useCallback(
    (id, key, value, post, replace) => {
      if (replace) {
        setData(post.sort((a, b) => b.id - a.id));
      } else if (post) {
        const updatedPosts = [post, ...data];

        setData(updatedPosts.sort((a, b) => b.id - a.id));
      } else if (id && key) {
        // eslint-disable-next-line array-callback-return, consistent-return
        const updatedPosts = data.map((item) => {
          if (item.id === id) {
            return { ...item, [key]: value };
          }

          return item;
        });

        setData(updatedPosts.sort((a, b) => b.id - a.id));
      } else {
        console.log("error", id, post);
      }
    },
    [data]
  );

  return (
    <blogContext.Provider value={data}>
      <blogUpdateContext.Provider value={updatePosts}>
        {children}
      </blogUpdateContext.Provider>
    </blogContext.Provider>
  );
}
