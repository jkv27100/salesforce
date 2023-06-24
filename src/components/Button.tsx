import styles from "./styles/button.module.css";

function Button({ label, isPrimary = true, isContact = false, onClick }: any) {
  const customStyle = {
    backgroundColor: "#285FCA",
    border: "none",
    color: "white",
    padding: "15px 50px",
  };
  return (
    <button
      className={isPrimary ? styles.buttonPrimary : styles.buttonSecondary}
      style={isContact ? customStyle : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
