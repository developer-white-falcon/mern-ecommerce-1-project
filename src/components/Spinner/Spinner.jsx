import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles';

const Spinner = () => {
  return (
    <div>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </div>
  );
};

export default Spinner;
