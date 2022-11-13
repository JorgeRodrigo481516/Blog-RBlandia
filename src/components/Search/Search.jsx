import searchIcon from "../../assets/search.svg";

export default function Search() {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="flex max-h-10 cursor-pointer items-center gap-3 rounded-md bg-white bg-opacity-20 p-3 sm:max-h-16 sm:gap-5 sm:p-6">
      <img
        src={searchIcon}
        alt="Search icon"
        className="h-4 w-4 sm:h-6 sm:w-6"
      />
      <input
        type="text"
        placeholder="Pesquisar no blog"
        className="w-full bg-[transparent] text-[clamp(17px,4vw,22px)] text-gray text-gray-dark outline-none placeholder:text-white placeholder:text-opacity-50"
      />
    </label>
  );
}
