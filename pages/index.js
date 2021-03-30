import FavoritesContainer from '../containers/FavoritesContainer';
import { useAppContext } from '../context/state';
import { setState } from 'react';

const homeLayout = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '-1',
};

export default function Home(props) {
  const sharedState = useAppContext();
  // const [state, setState] = useAppContext(AppContext);

  console.log('index', sharedState);

  return (
    <div className="rock-home" style={homeLayout}>
      <img
        alt="therockjohnson"
        src="/assets/therock.jpg"
        width="800"
        height="800"
      ></img>
      {/* <button onClick={setState((state) => ({ ...state, fuckingState: 'GA' }))}>
        NOT TINY
      </button> */}
      <button onClick={() => sharedState.sharedStateFunction()}>
        TEST BUTTON
      </button>
      {/* <FavoritesContainer /> */}
    </div>
  );
}
