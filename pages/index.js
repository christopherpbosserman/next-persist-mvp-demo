import FavoritesContainer from '../containers/FavoritesContainer';
import { useAppContext } from '../context/state';

const homeLayout = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '-1',
};

export default function Home() {
  return (
    <div className="rock-home" style={homeLayout}>
      <img
        alt="therockjohnson"
        src="/assets/therock.jpg"
        width="800"
        height="800"
      ></img>
      <FavoritesContainer />
    </div>
  );
}
