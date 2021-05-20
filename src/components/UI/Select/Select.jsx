import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';
import Select from 'react-select';

import { SvgIcon } from '@ui';

import stylesGlobal from './Select.scss';

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: 'small',
};

const SelectComponent = ({ label, value, className, options, error, onChange, variant, ...props }) => {
  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const onSelectChange = useCallback((e) => {
    if (onChange) {
      onChange(e);
    }
  }, []);

  return (
    <div className={cns('input-block', className)}>
      {label && (
        <label className={'label'} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={cns('select-container', variant && VariantClasses[variant])}>
        <Select
          className={cns('react-select-container', error && '_withError')}
          classNamePrefix="react-select"
          value={value}
          onChange={onSelectChange}
          options={options}
          {...props}
        />

        {error && <div className={'error'}>{error}</div>}
      </div>
    </div>
  );
};

SelectComponent.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

SelectComponent.defaultProps = {
  variant: Variants.DEFAULT,
};

export default memo(SelectComponent);
