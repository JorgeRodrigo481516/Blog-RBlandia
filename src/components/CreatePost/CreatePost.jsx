import { useEffect, useState } from "react";
import moment from "moment";

import plusIcon from "../../assets/plus.png";
import { useBlog, useBlogUpdate } from "../../contexts/Blog";

const initialPost = {
  id: null,
  date: null,
  isSave: false,
  title: "",
  description: "",
};

export default function CreatePost() {
  const [isCreating, setIsCreating] = useState(false);
  const [post, setPost] = useState(initialPost);

  const data = useBlog();
  const updateData = useBlogUpdate();

  const handleChange = (key, value) => {
    const newValues = { ...post, [key]: value };

    setPost(newValues);
  };

  const handleCreate = () => {
    const title = post.title || "Postagem sem título";
    const description = post.description || "Postagem sem nenhuma descrição..";

    let id = 1;

    data.forEach((item) => {
      if (item.id >= id) {
        id = item.id + 1;
      }
    });

    const newValues = { ...post, id, title, description };
    console.log(newValues, data);

    setPost(newValues);
    updateData(newValues.id, false, false, newValues);
    setPost(initialPost);
  };

  useEffect(() => {
    if (isCreating) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";

      let today = moment();
      today = `${today.date()} de ${today.format("MMM")}, ${today.year()}`;

      const newValues = { ...post, date: today };

      setPost(newValues);
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [isCreating]);

  if (!isCreating) {
    return (
      <button
        type="button"
        onClick={() => setTimeout(setIsCreating(true), 500)}
        className="absolute -top-2.5 rotate-90 rounded-[20px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:animate-ping"
      >
        <img src={plusIcon} alt="Plus icon" className="" />
      </button>
    );
  }

  return (
    <div className="fixed top-0 flex h-screen w-screen items-center justify-center bg-gray-dark bg-opacity-70 p-5">
      <div className="relative w-full max-w-3xl rounded-xl bg-white-200 p-6 pt-16">
        <button
          type="button"
          onClick={() => setIsCreating(false)}
          className="absolute top-0 right-0 h-12 w-full rounded-t-lg bg-opacity-20 bg-gradient-to-t from-gradient-default-dark to-gradient-default-light shadow-md"
        >
          <span className="text-3xl italic text-white-200">Cancelar</span>
        </button>
        <span className="text-[clamp(14px,5vw,16px)] text-gray">
          {post.date}
        </span>
        <input
          value={post.title}
          placeholder="Adicione um título a sua postagem"
          onChange={(e) => handleChange("title", e.target.value)}
          className="my-2 mt-6 w-full rounded-lg bg-white bg-opacity-50 p-2 text-[clamp(13px,5vw,15px)] text-gray-dark shadow-md outline-none focus:bg-opacity-100"
        />
        <textarea
          value={post.description}
          placeholder="Adicione uma descrição a sua postagem.."
          onChange={(e) => handleChange("description", e.target.value)}
          className="h-72 w-full resize-none rounded-lg bg-white bg-opacity-50 p-2 text-[clamp(11px,5vw,14px)] leading-7 text-gray shadow-md outline-none focus:bg-opacity-100 md:leading-8"
        />
        <button
          type="button"
          onClick={handleCreate}
          className="absolute -bottom-16 right-8 my-2 rounded-3xl bg-gradient-to-b from-gradient-default-light to-gradient-default-dark p-2 px-14 text-2xl italic text-white opacity-75 shadow-sm shadow-white-200 hover:opacity-100 active:animate-ping"
        >
          Criar
        </button>
      </div>
    </div>
  );
}
