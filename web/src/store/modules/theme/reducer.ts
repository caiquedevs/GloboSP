import types from '../types';
import { darkMode, lightMode } from '../../../styles/colors';

type mode = typeof darkMode | typeof lightMode;

interface IState {
  theme: mode;
  active: boolean;
}

const initialState: IState = {
  theme: darkMode,
  active: true,
};

export default function reducer(state = initialState, { type, payload }: any): IState {
  switch (type) {
    case types.CHANGE_THEME: {
      const newState = { ...state };
      newState.theme = JSON.stringify(newState.theme) === JSON.stringify(darkMode) ? lightMode : darkMode;
      newState.active = !newState.active;

      return newState;
    }

    default: {
      return state;
    }
  }
}
