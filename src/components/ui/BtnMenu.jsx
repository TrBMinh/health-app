import IconMenu from '/src/assets/icons/navbar/menu.svg?react';
import IconClose from '/src/assets/icons/navbar/close.svg?react';
import PropTypes from 'prop-types';

function BtnMenu({ onClick, isOpened }) {
  return (
    <button onClick={onClick}>{isOpened ? <IconClose /> : <IconMenu />}</button>
  );
}

BtnMenu.propTypes = {
  onClick: PropTypes.func,
  isOpened: PropTypes.bool,
};

export default BtnMenu;
