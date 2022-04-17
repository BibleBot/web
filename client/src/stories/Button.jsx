import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, icon, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {icon && <span><FontAwesomeIcon icon={icon} /></span> }
      {label && <span>{label}</span>}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.element,
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
