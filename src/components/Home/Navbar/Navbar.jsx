import PropTypes from "prop-types";

function Navbar(props) {
  const logo = props.logo;
  return (
    <header className="w-full border-b border-color-white bg-primary-color text-color-white p-4 flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <div className="w-12">
          <a
            href="https://github.com/IugAnemona"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-full hover:scale-110 duration-300"
              src={logo}
              alt="Logo"
            />
          </a>
        </div>
        <div className="sm:hidden text-color-white text-4xl">
          <i className="fa-sharp fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="hidden sm:block">
          <nav>
            <ul className="flex">
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  className="mx-5 hover:text-slate-300 "
                  href="https://github.com/IugAnemona"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git
                </a>
              </li>
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  className="mx-5 hover:text-slate-300 "
                  href="https://www.instagram.com/guianemona/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Insta
                </a>
              </li>
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  className="mx-5 hover:text-slate-300 "
                  href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedl
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
Navbar.propTypes = {
  logo: PropTypes.string,
};

export default Navbar;
