import { AiFillCaretRight } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

export default function SearchHeader() {
  return (
    <header className="flex max-w-7xl w-full h-20 m-auto">
      <div className="w-1/5 logo flex justify-center items-center">
        <div className="bg-red-600 w-10 h-8 flex justify-center items-center rounded-lg mr-2 text-white text-2xl">
          <AiFillCaretRight />
        </div>
        <p className="text-3xl font-bold">Youtube</p>
      </div>
      <form className="searchBar w-full flex justify-center items-center relative">
        <input
          type="text"
          className="border border-solid border-gray-300 w-1/2 py-2 px-4 rounded-2xl text-lg focus:outline-none"
        />
        <BsSearch className="absolute right-72 text-2xl" />
      </form>
    </header>
  );
}
