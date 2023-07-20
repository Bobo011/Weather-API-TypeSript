import { City, Clouds } from './components';

const App = () => {
  return (
    <div className='flex flex-wrap justify-start flex-col items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full'>
      <div className="bg-gradient-to-br from-sky-200 py-10 px-20 via-rose-200 to-lime-200 h-[90vh]  w-1/3 flex  item-center rounded flex-col">
        <City />
        <Clouds />
      </div>
    </div>
  );
};

export default App;
