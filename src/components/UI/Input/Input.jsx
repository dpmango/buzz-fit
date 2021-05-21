import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';

import { SvgIcon } from '@ui';

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: '_small',
};

const Input = ({
  className,
  label,
  inputRef,
  icon,
  iconPosition,
  variant,
  modifier,
  allowClear,
  value,
  onChange,
  error,
  ...props
}) => {
  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const inputIcon = useMemo(() => {
    if (icon) {
      return <i className={cns('hb-ico', icon)} />;
    }

    return null;
  }, [icon, iconPosition]);

  const onInputChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, []);

  const onCLearInput = useCallback(() => {
    if (onChange) {
      onChange('');
    }
  }, []);

  const clearIcon = useMemo(() => {
    if (allowClear && value) {
      return (
        <button type="button" onClick={onCLearInput} className="input_clear" title="Очистить">
          &#10005;
        </button>
      );
    }

    return null;
  }, [value, allowClear]);

  const inputProps = {
    id,
    ref: inputRef,
    className: cns(
      'input_input',
      icon && '_withIcon',
      iconPosition && `_pos${iconPosition}`,
      allowClear && '_withClear',
      error && '_withError'
    ),
    value,
    onChange: onInputChange,
    ...props,
  };

  return (
    <div
      style={props.style}
      className={cns('input-block', variant && VariantClasses[variant], modifier && `_${modifier}`, className)}>
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="input-block__wrap">
        {inputIcon}

        {props.type === 'textarea' ? <textarea {...inputProps} /> : <input {...inputProps} />}

        {clearIcon}

        {/* {error && <div className={'error'}>{error}</div>} */}
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  allowClear: PropTypes.bool,
  value: PropTypes.string,
  modifier: PropTypes.string,
  variant: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Input.defaultProps = {
  variant: Variants.DEFAULT,
};

export default memo(Input);
