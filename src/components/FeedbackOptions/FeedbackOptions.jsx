import Button from '@mui/material/Button';

import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            style={{
              marginLeft: '4px',
            }}
            variant="outlined"
            size="medium"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            type="button"
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
