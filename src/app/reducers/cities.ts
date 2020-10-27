import {
  ADD_CITY,
  DELETE_CITY,
  SET_CURRENT_WEATHER,
} from "app/constants/actions";
import { AppAction } from "app/types/AppAction";
import { City } from "app/types/City";

interface CitiesState {
  [prop: string]: City;
}

const initialState: CitiesState = {};

export const citiesReducer = (
  state = initialState,
  action: AppAction
): CitiesState => {
  switch (action.type) {
    case ADD_CITY: {
      const city = action.city;
      return { ...state, [city.id]: city };
    }

    case SET_CURRENT_WEATHER: {
      const { cityId, weather, forecast } = action.payload;
      return {
        ...state,
        [cityId]: { ...state[cityId], currentWeather: weather, forecast },
      };
    }

    case DELETE_CITY: {
      const cityId = action.cityId;
      const newState = { ...state };
      delete newState[cityId];
      return newState;
    }

    default:
      return state;
  }
};
