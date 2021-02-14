import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ErrorPrompt.module.css";

const ErrorPrompt = ({ message }) => {
  return (
    <CSSTransition appear={true} in={true} timeout={250} classNames={styles}>
      <div className={styles.errorPrompt} unmountOnExit>
        <p>{message}</p>
      </div>
    </CSSTransition>
  );
};

export default ErrorPrompt;
