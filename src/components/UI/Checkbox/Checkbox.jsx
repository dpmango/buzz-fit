import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';

const Checkbox = ({ className, label, isChecked, error, onChange, ...props }) => {
  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const handleChange = useCallback(
    (e) => {
      if (onChange) {
        console.log('change event');
        onChange();
      }
    },
    [onChange]
  );

  return (
    <div className={cns('checkbox', className, error && '_withError')}>
      <input id={id} type="checkbox" checked={isChecked} onChange={handleChange} {...props} />
      <label htmlFor={id} className={cns('checkbox-wrapper', isChecked && '_isChecked')}>
        <i className="checkbox-ico"></i>
        <p>{label}</p>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default memo(Checkbox);
