import React from 'react';
const tabList = [
  { title: 'ĐẶT TẠP CHÍ' },
  { title: 'E-MAGAZINE' },
  { title: 'PODCAST' },
  { title: 'YOUTUBE' },
];
const Tabs = ({ className }) => {
  return (
    <div className={className}>
      {tabList?.length &&
        tabList?.map((tab, index) => {
          return (
            <a className="btn-green " key={index}>
              {tab.title}
            </a>
          );
        })}
    </div>
  );
};

export default Tabs;
