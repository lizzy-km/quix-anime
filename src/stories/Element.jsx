import React from "react";

import PropTypes from "prop-types";
import { SensestiveEl } from "./SenElement";

/** Primary UI component for user interaction */
export const Element = ({
  className,
  primary,
  backgroundImage,
  label,
  Tag,
  children,
  ...props
}) => {
    const isSenstive = SensestiveEl?.find((sen)=> sen === Tag)
    
  if (!isSenstive) {
  return  (<Tag
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={className}
      {...props}
    >
      {label && label}
      {children}
    </Tag>)
  } else {
   return <Tag   className={className}  {...props} />
  }
};

Element.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundImage: PropTypes.string,
  /** Element Tailwind Class */
  className: PropTypes.string,

  /** Element contents */
  label: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
  Tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
};
