import PropTypes from 'prop-types';
import { MainHeaderComponent } from './MainHeaderComponent';

export const MainHeaderContainer = () => {
  return <MainHeaderComponent />
}

MainHeaderContainer.propTypes = {
  context: PropTypes.any,
};
