import type { NextPage } from 'next';
import Footer from '../components/Footer';


const Home: NextPage = () => {
  return (
    <div className='flex flex-col home_container bg-gray-900 text-white'>
        <h2 className='mx-auto mt-14 mb-56 text-4xl'> Hello World </h2>
          <h4 className='mx-auto text-lg'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus saepe sunt dolorum provident dolores ut? </h4>
        <div className='home_background'>
          <div className='home_background_div bg-green-800'></div>
        </div>
      <Footer/>
    </div>
  );
};

export default Home;
