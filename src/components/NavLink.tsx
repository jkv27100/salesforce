import styles from "./styles/navLink.module.css";

type IProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function NavLink({ label, onClick }: IProps) {
  return (
    <button className={styles.navLink} onClick={onClick}>
      {label}
    </button>
  );
}

export default NavLink;
