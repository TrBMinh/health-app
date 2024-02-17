import { Box, CircularProgress } from '@mui/joy';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function PercentComplete({ className }) {
  return (
    <Box
      className={classNames(
        'h-78 bg-hero-pattern bg-no-repeat bg-center flex items-center justify-center',
        className
      )}
    >
      <CircularProgress
        determinate
        value={75}
        sx={{
          '--CircularProgress-trackThickness': '3px',
          '--CircularProgress-progressThickness': '3px',
          '--CircularProgress-size': '181px',
          '--CircularProgress-progressColor': '#FFF',
        }}
        variant="plain"
        style={{ color: 'yellow' }}
      >
        <div className="flex items-end gap-1">
          <p className="text-lg text-light [text-shadow:_0_2px_4px_rgba(252_165_0_/_80%)]">
            05/21
          </p>
          <p className="text-2xl text-light [text-shadow:_0_2px_4px_rgba(252_165_0_/_80%)]">
            75%
          </p>
        </div>
      </CircularProgress>
    </Box>
  );
}

PercentComplete.propTypes = {
  className: PropTypes.string,
};

export default PercentComplete;
