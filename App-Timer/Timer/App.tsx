
import { ActivityIndicator } from 'react-native';
import theme from './src/theme';

import { Routes } from './src/routes';

import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular,NunitoSans_600SemiBold,NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_300Light } from '@expo-google-fonts/open-sans';

export default function App() {
  const [fontsloaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_300Light
  })

  return (
    <ThemeProvider theme={theme}>
      { fontsloaded ? <Routes /> : <ActivityIndicator/>}
    </ThemeProvider>

  );
}
