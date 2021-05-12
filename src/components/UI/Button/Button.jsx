import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import cns from 'classnames';

const Themes = {
  PRIMARY: 'primary',
  ACCENT: 'accent',
  DANGER: 'danger',
  SUCCESS: 'success',
  DARK: 'dark',
};

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
  BIG: 'big',
};

const ThemeClasses = {
  [Themes.PRIMARY]: '_primary',
  [Themes.ACCENT]: '_accent',
  [Themes.DANGER]: '_danger',
  [Themes.SUCCESS]: '_success',
  [Themes.DARK]: '_dark',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: '_small',
  [Variants.BIG]: '_big',
};

// const FancyLink = React.forwardRef((props, ref) => (
//   <a ref={ref} {...props}>
//     💅 {props.children}
//   </a>
// ));

const Button = ({ children, className, theme, variant, type, outline, block, ...props }) => {
  const classStyle = cns(
    'btn',
    theme && ThemeClasses[theme],
    variant && VariantClasses[variant],
    outline && '_outline',
    block && '_block',
    className
  );

  if (type === 'link') {
    return (
      <Link {...props} className={classStyle}>
        {children}
      </Link>
    );
  } else {
    return (
      <button {...props} className={classStyle}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Button.defaultProps = {
  theme: Themes.PRIMARY,
  variant: Variants.DEFAULT,
};

export default memo(Button);
