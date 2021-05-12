/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import cns from 'classnames';

const TermsContent = ({ rows }) => {
  return (
    <div className="terms-content">
      <div className="wrapper">
        {rows.map((row) => (
          <div className="terms-row" key={row.id}>
            <h2 className="terms-title">{row.title}</h2>
            <div className="terms-info">{row.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsContent;
