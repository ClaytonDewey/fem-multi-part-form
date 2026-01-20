import { Footer, Sidebar } from './components';
import { Form } from './components/form';

const App = () => {
  return (
    <>
      <main className='app'>
        <Sidebar />
        <Form />
      </main>
      <Footer />
    </>
  );
};
export default App;
