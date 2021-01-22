import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center py-2 md:justify-around md:py-4 items-center">
        <h2 className="px-10 text-4xl text-red-600">NWIND</h2>

      <nav className="hidden md:block space-x-8 px-10">
        <Link href={"/"} >
          <a className="p-2 rounded-2xl text-gray-100 hover:text-gray-600 hover:bg-red-600">Home</a>
        </Link>
        <Link href={"/about"}>
          <a className="p-2 rounded-2xl text-gray-100 hover:text-gray-600 hover:bg-red-600">About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
