import headerstyles from "./header.module.css";
const Header = () => {
  return (
    <div className={headerstyles.header}>
      <div className={headerstyles.ehn}>
        <div className={headerstyles.logo}>
          <img src="	https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        </div>
        <div className={headerstyles.menu}>
          <h3>Товхимол</h3>
        </div>
        <div className={headerstyles.menu}>
          <h3>Нийтлэлүүд</h3>
        </div>
        <div className={headerstyles.menu}>
          <h3>Цувралууд</h3>
        </div>
        <div className={headerstyles.menu}>
          <h3>Подкаст</h3>
        </div>
        <div className={headerstyles.menu}>
          <h3>Бидний тухай</h3>
        </div>
        <div className={headerstyles.search}></div>
      </div>
      <div className={headerstyles.more}>
        <h3>Уншаад үзье</h3>
      </div>
    </div>
  );
};

export default Header;
