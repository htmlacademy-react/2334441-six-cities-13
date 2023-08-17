import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppProps = {
    placesCount: number;
}

export default function App({placesCount}: AppProps): JSX.Element {
  return (
    <WelcomeScreen placesCount ={placesCount} />
  );
}

