import { Input } from '../';
import { useFormStore } from '../../store/useFormStore';

const planAddOns = [
  {
    id: 1,
    name: 'online service',
    desc: 'access to multiplayer games',
    monthly: 1,
    yearly: 10,
  },
  {
    id: 2,
    name: 'larger storage',
    desc: 'extra 1TB of cloud save',
    monthly: 2,
    yearly: 20,
  },
  {
    id: 3,
    name: 'customizable profile',
    desc: 'custom theme on your profile',
    monthly: 2,
    yearly: 20,
  },
];
const AddOns = () => {
  const { subscriptionType } = useFormStore();
  return (
    <fieldset>
      <legend className='form__header'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </legend>

      <div className='input-checkbox-wrapper'>
        {planAddOns.map((addOn) => {
          const { id, name, desc, monthly, yearly } = addOn;
          return (
            <div className='input-checkbox' key={id}>
              <label>
                <Input
                  type='checkbox'
                  name='addon'
                  id={name}
                  onChange={() => console.log('clicked')}
                />
                <div className='addon-info'>
                  <span className='addon-name'>{name}</span>
                  <div className='addon-desc'>{desc}</div>
                </div>

                <div className='addon-price'>
                  +$
                  {subscriptionType === 'monthly'
                    ? `${monthly}/mo`
                    : `${yearly}/yr`}
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};
export default AddOns;
