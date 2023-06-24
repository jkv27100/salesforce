import { Button } from ".";

import styles from "./styles/landingContainer.module.css";

function LandingContainer() {
  return (
    <div className={styles.container}>
      <h1>Best way to grow your local business</h1>
      <p>
        Artificial Intelligence powered easy-to-use tools to get more customers
        & give them a better experience
      </p>
      <div style={{ display: "flex", gap: "30px" }}>
        <input
          type="text"
          name=""
          placeholder="ENTER YOUR EMAIL"
          id=""
          className={styles.mailInput}
        />
        <Button label="GET DEMO" isContact={true} />
      </div>
    </div>
  );
}

export default LandingContainer;
