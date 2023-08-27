import React from 'react';

const BreadCrumb = ({ children, className }) => {
  return <ul className={`breadcrumb  ${className}`}>{children}</ul>;
};
const BreadCrumbItem = ({ children, isActive = false, className, hover }) => {
  return (
    <li
      className={`breadcrumb__item  flex   font-rm transition-colors duration-300 text-sm ${
        hover ? `hover:text-green-06` : ''
      }  ${className ?? ''} ${!!isActive ? 'active' : ''}`}
    >
      {children}
    </li>
  );
};

BreadCrumb.Item = BreadCrumbItem;
export default BreadCrumb;
