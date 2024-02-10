import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationRow({ menuItems, className }) {
  return (
    <nav className={classNames('flex', 'gap-8', className)}>
      {menuItems.map((item) => (
        <Link
          className="flex gap-2 items-center text-light transition duration-300 hover:text-primary-400 hover:ease-in-out"
          to="/"
          key={item.name}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

NavigationRow.propTypes = {
  menuItems: PropTypes.array,
  className: PropTypes.string,
};

export default NavigationRow;
