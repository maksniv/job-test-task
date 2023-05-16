import style from './Navbar.module.scss';

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <h1 className={style.navbar__title}>
          <span>Cars</span> Shop
        </h1>
      </nav>
    </>
  );
}

export default Navbar;
