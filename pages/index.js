import Head from 'next/head';
import Favorites from '../components/Favorites';

const homeLayout = {
  display: 'flex',
  justifyContent: 'center',
  zIndex: '-1',
};

export default function Home(state) {
  console.log('indez', state);
  return (
    <div className="rock-home" style={homeLayout}>
      <img alt="therockjohnson" src="/assets/therock.jpg"></img>
      <Favorites style={{ display: 'flex' }} />
    </div>
  );
}
