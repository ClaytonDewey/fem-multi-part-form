import { Button } from '../';

const FormButtons = () => {
  return (
    <div className='form__buttons'>
      <Button type='button' className='btn btn-back'>
        Go Back
      </Button>
      <Button type='button' className='btn btn-primary'>
        Next Step
      </Button>
    </div>
  );
};
export default FormButtons;
