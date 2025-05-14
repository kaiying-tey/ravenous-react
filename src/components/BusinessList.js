import React from 'react';
import Business from './Business';
import './BusinessList.css'

const BusinessList = ({businesses}) => {
  return (
    <div className="business-list">
      {businesses.map((biz) => (
        <Business key={biz.id} business={biz} />
      ))}
    </div>
  );
};

export default BusinessList;
