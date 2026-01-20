import { Input } from '../';

const Personal = () => {
  return (
    <fieldset>
      <legend className='form__header'>
        <h2>Personal Information</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </legend>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <Input
          type='text'
          className='form-control'
          id='name'
          name='name'
          placeholder='e.g. Stephen King'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email Address</label>
        <Input
          type='email'
          className='form-control'
          id='email'
          name='email'
          placeholder='e.g. stephenking@lorem.com'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='phone'>Phone Number</label>
        <Input
          type='phone'
          className='form-control'
          id='phone'
          name='phone'
          placeholder='e.g. +1 234 567 8900'
        />
      </div>
    </fieldset>
  );
};
export default Personal;
