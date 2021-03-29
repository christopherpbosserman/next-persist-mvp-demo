import Favorites from '../components/Favorites';

const homeLayout = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '-1',
};

export default function Home(props) {
  console.log('index', props);
  return (
    <div className="rock-home" style={homeLayout}>
      <img
        alt="therockjohnson"
        src="/assets/therock.jpg"
        width="800"
        height="800"
      ></img>
      <Favorites />
    </div>
  );
}
