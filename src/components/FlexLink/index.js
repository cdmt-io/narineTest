import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const FlexLink = ({ children, to, activeClassName, ...others }) => {
  const isBlogLink = /^\/blog(\/)?/.test(to);
  if (isBlogLink) {
    return (
      <a href={to} {...others}>
        {children}
      </a>
    );
  }

  const isInternalLink = /^\/(?!\/)/.test(to);
  if (isInternalLink) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...others}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...others}>
      {children}
    </a>
  );
};



export default FlexLink
