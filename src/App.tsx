import { Footer, Form, Sidebar } from './components';

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
