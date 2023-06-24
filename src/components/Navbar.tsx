import { useNavigate } from "react-router-dom";

import { Button, NavLink } from ".";
import Logo from "../assets/logo.webp";
import { routes } from "../data";

import styles from "./styles/navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.routesContainer}>
        {routes.map((route) => (
          <NavLink
            label={route.label}
            onClick={() => {
              ("");
            }}
          />
        ))}
        <div className={styles.navButtons}>
          <Button label="Sign In" onClick={() => navigate("/login")} />
          <Button label="Get Started" isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
