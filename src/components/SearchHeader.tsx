import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export default function SearchHeader() {
  const { pathname } = useLocation();
  const location = window.location.pathname;
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
  console.log(location);
  return (
    <header className="flex max-w-7xl w-full h-20 m-auto">
      <div
        className="logo w-1/5 flex justify-center items-center cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        <div className="bg-red-600 w-10 h-8 flex justify-center items-center rounded-lg mr-2 text-white text-2xl">
          <AiFillCaretRight />
        </div>
        <h1 className="text-3xl font-bold">Youtube</h1>
      </div>
      <form
        className="searchBar w-full flex justify-center items-center relative"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search...."
          value={text}
          onChange={handleChange}
          className="border border-solid border-gray-300 w-1/2 py-2 px-4 rounded-2xl text-lg focus:outline-none"
        />
        <button type="submit" className='absolute right-72 text-2xl"'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
