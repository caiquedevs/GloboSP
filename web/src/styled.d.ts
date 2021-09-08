import 'styled-components';
import { darkMode, lightMode } from './styles/colors';

type ITheme = typeof darkMode | typeof lightMode;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    colors: ITheme;
  }
}
