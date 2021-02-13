import React from "react";
import PropTypes from "prop-types";

const Section = (props) => {
  const { title, children } = props;
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: "",
};

export default Section;
