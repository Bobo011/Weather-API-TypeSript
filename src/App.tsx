import { City, Clouds } from './components';
import { SunRise,Sunset } from './components/Sun';
import {Feels,Humidity,Precipitation,Pressure} from './components/Tempreture'
import {Visibility,WindSpeed} from './components/Wind'

const App = () => {
  return (
    <div className='flex justify-start flex-col items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full'>
      <div className="mt-5 bg-gradient-to-br from-sky-200 via-rose-200 to-lime-200 h-[95vh] py-10 px-10 w-1/2 flex items-center rounded flex-col">
        <City />
        <Clouds />
        <div className='grid grid-cols-2 gap-3 mx-auto w-11/12 overflow-auto '>
          <SunRise />
          <Sunset />
          <WindSpeed />
          <Feels />
          <Humidity />
          <Precipitation />
          <Pressure />
          <Visibility />
          
        </div>
      </div>
    </div>
  );
};

export default App;
