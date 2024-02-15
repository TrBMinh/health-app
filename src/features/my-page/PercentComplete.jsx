import { Box, CircularProgress, Typography } from '@mui/joy';
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
        <Typography>75%</Typography>
      </CircularProgress>
    </Box>
  );
}

PercentComplete.propTypes = {
  className: PropTypes.string,
};

export default PercentComplete;
