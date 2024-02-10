import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationCol({ menuItems, className }) {
  return (
    <nav className={classNames('flex', 'flex-col', className)}>
      {menuItems.map((item) => (
        <Link
          className="text-light leading-4 bg-gray px-8 py-5 transition duration-300 hover:text-primary-400 hover:ease-in-out"
          to={item.path}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

NavigationCol.propTypes = {
  menuItems: PropTypes.array,
  className: PropTypes.string,
};

export default NavigationCol;
