import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(pathname.split('/')[2] || ''), [pathname]);
  return (
    <header className="flex w-full py-4 px-8 border-b border-zinc-600 mb-4">
      <div
        className="logo flex items-center cursor-pointer text-3xl"
        onClick={() => {
          navigate('/');
        }}
      >
        <div className="bg-brand w-10 h-8 flex justify-center items-center rounded-lg mr-2">
          <AiFillCaretRight />
        </div>
        <h1 className="font-bold">Youtube</h1>
      </div>
      <form
        className="searchBar w-full flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search...."
          value={text}
          onChange={handleChange}
          className="w-7/12 py-2 px-4 rounded-tl-lg rounded-bl-lg outline-none bg-black text-gray-50 text-xl"
        />
        <button
          type="submit"
          className="bg-zinc-600 px-4 py-2 rounded-tr-lg rounded-br-lg"
        >
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
