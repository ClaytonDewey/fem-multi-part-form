const Step = ({ step, active }: { step: number; active: boolean }) => {
  return <div className={`step ${active ? 'active' : ''}`}>{step}</div>;
};
export default Step;
