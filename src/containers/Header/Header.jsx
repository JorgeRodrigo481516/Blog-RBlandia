import { Search } from "../../components/Search";

export default function Header() {
  return (
    <header className="mb-6 flex h-48 items-center justify-center bg-gradient-to-r from-gradient-default-dark to-gradient-default-light p-5 shadow-lg md:mb-12 md:h-60">
      <div className="flex max-w-4xl flex-auto flex-col gap-10 md:gap-16">
        <div className="flex items-center justify-between text-[clamp(18px,5vw,24px)] text-white">
          <h1>Rblândia</h1>
          <h2>blog</h2>
        </div>
        <Search />
      </div>
    </header>
  );
}
