import React from "react";

import PropTypes from "prop-types";

import { ConvertRounded } from "./Sizes";

/** Primary UI component for user interaction */
export const Button = ({
  className,
  primary,
  backgroundImage,
  label,
  Tag,
  ...props
}) => {
  return (
    <Tag
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={className}
      {...props}
    >
      {label}
    </Tag>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundImage: PropTypes.string,
  /** Button Tailwind Class */
  className: PropTypes.string,

  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
  Tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
