import { ChangeEvent, useState } from 'react';
import { Input } from '../';
import { useFormStore } from '../../store/useFormStore';
import { Icon } from '../../svg/';

type PlanType = 'arcade' | 'advanced' | 'pro';

const plans = [
  {
    id: 1,
    name: 'arcade',
    monthly: 9,
    yearly: 90,
  },
  {
    id: 2,
    name: 'advanced',
    monthly: 12,
    yearly: 120,
  },
  {
    id: 3,
    name: 'pro',
    monthly: 15,
    yearly: 150,
  },
];

const Plan = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const { planType, setPlanType, setSubscriptionType } = useFormStore();

  const handleSubscriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setSubscriptionType('monthly')
      : setSubscriptionType('yearly');

    setIsChecked(e.target.checked);
  };

  const handlePlanChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlan = e.target.id as PlanType;
    console.log(newPlan);
    setPlanType(newPlan);
  };

  return (
    <fieldset>
      <legend className='form__header'>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </legend>
      <div className='input-group-wrapper'>
        {plans.map((plan, index) => {
          const { id, name, monthly, yearly } = plan;
          return (
            <div
              className={`input-group ${planType === name ? 'active' : ''}`}
              key={id}>
              <label>
                <Icon name={name} />
                <div className='plan-info'>
                  <span className='plan-name'>{name}</span> $
                  {isChecked ? `${monthly}/mo` : `${yearly}/yr`}
                </div>
                <Input
                  type='radio'
                  name='plan'
                  id={name}
                  onChange={handlePlanChange}
                  defaultChecked={index === 0}
                />
              </label>
            </div>
          );
        })}
      </div>

      <div className='toggle-switch'>
        <span className={isChecked ? 'sub-active' : ''}>Monthly</span>
        <Input
          type='checkbox'
          name='subType'
          id='sub-type'
          className={`toggle ${!isChecked ? 'off' : ''}`}
          checked={isChecked}
          onChange={handleSubscriptionChange}
        />
        <label htmlFor='sub-type' className='label'>
          <div className='ball'></div>
        </label>
        <span className={!isChecked ? 'sub-active' : ''}>Yearly</span>
      </div>
    </fieldset>
  );
};
export default Plan;
