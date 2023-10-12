import styles from "./Header.module.css";
import Logo from "../assets/AppName.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
    </header>
  );
};
export default Header;
