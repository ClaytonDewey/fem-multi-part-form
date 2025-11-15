import { Step } from '.';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <Step step={1} active={true} />
      <Step step={2} active={false} />
      <Step step={3} active={false} />
      <Step step={4} active={false} />
    </section>
  );
};
export default Sidebar;
