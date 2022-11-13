import { createContext, useContext, useState } from "react";

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

  return (
    <blogContext.Provider value={data}>
      <blogUpdateContext.Provider value={setData}>
        {children}
      </blogUpdateContext.Provider>
    </blogContext.Provider>
  );
}
