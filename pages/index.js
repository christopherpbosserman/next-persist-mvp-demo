import Head from 'next/head';
import Favorites from '../components/Favorites';

const homeLayout = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '-1',
};

export default function Home(props) {
  console.log('index:', props);
  return (
    <div className="rock-home" style={homeLayout}>
      {/* <img alt="therockjohnson" src="{/assets/therock.jpg}"></img> */}
      <img
        alt="therockjohnson"
        src={props[0].image}
        width="800"
        height="800"
      ></img>
      <h1>{props[0].title}</h1>
      <Favorites />
    </div>
  );
}
