import logo from "../../public/logo.png";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center">
        <img
          className="object-contain w-[120px] h-auto pr-5"
          src={logo}
          alt="logo"
        />

        <h1 className="text-5xl text-center font-bold text-[#edbf68]">
          Elegant Context
        </h1>
      </div>

      <button className="px-7 py-4 rounded-md bg-[#edbf68] hover:bg-[#f5b744] font-sans text-lg font-medium ml-2">
        Cart
      </button>
    </header>
  );
};

export default Header;
