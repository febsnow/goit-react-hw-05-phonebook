import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Logo from "../Logo/Logo";

import "./Section.module.css";

const Section = (props) => {
  const { title, children } = props;
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="section"
      unmountOnExit
    >
      {(stage) => {
        return (
          <section>
            <CSSTransition
              in={stage === "entered"}
              appear={true}
              timeout={500}
              classNames="title"
              unmountOnExit
            >
              <Logo title={title} />
            </CSSTransition>
            {children}
          </section>
        );
      }}
    </CSSTransition>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: "",
};

export default Section;
