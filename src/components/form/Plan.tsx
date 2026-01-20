import { Input } from '../';

const Plan = () => {
  return (
    <fieldset>
      <legend className='form__header'>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </legend>
      <div className='form-group'>
        <label>
          <Input type='radio' name='plan' id='arcade' />
          Arcade $9/mo
        </label>
      </div>
      <div className='form-group'>
        <label>
          <Input type='radio' name='plan' id='advanced' />
          Advanced $12/mo
        </label>
      </div>
      <div className='form-group'>
        <label>
          <Input type='radio' name='plan' id='pro' />
          Pro $15/mo
        </label>
      </div>
      <div className='toggle-switch'>
        Monthly
        <Input type='checkbox' id='sub-type' className={`toggle`} />
        <label htmlFor='sub-type' className='label'>
          <div className='ball'></div>
        </label>
        Yearly
      </div>
    </fieldset>
  );
};
export default Plan;
